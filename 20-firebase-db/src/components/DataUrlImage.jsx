import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

// DataUrlImage
// - Props:
//    - `data`: required string — either a full data URL (`data:image/png;base64,...`) or a raw base64 string
//    - `mime`: optional string — required when `data` is raw base64 (default: 'image/png')
//    - `alt`: optional alt text
//    - `downloadName`: optional filename used for the download (default: `image`)
// - Renders an <img> using a data URL, and offers a Download button that converts
//   the base64 into a Blob and downloads it as a file.

function base64ToBlob(base64, mime) {
  const byteChars = atob(base64)
  const byteNumbers = new Array(byteChars.length)
  for (let i = 0; i < byteChars.length; i++) {
    byteNumbers[i] = byteChars.charCodeAt(i)
  }
  const byteArray = new Uint8Array(byteNumbers)
  return new Blob([byteArray], { type: mime })
}

export default function DataUrlImage({ data, mime = 'image/png', alt = '', downloadName = 'image' }) {
  const [objectUrl, setObjectUrl] = useState(null)

  const isDataUrl = useMemo(() => typeof data === 'string' && data.startsWith('data:'), [data])

  // If `data` is raw base64 (not a data URL), build one for the img src
  const dataUrl = useMemo(() => {
    if (!data) return null
    if (isDataUrl) return data
    // assume raw base64 string
    return `data:${mime};base64,${data}`
  }, [data, isDataUrl, mime])

  // Create an object URL for download (from Blob) when `data` is available
  useEffect(() => {
    if (!data) return undefined

    // if we already have a full data URL we can convert its base64 part; if it's raw base64 use it directly
    let base64Str = data
    if (isDataUrl) {
      const comma = data.indexOf(',')
      base64Str = comma === -1 ? data : data.slice(comma + 1)
    }

    try {
      const blob = base64ToBlob(base64Str, mime)
      const url = URL.createObjectURL(blob)
      setObjectUrl(url)
      return () => {
        setObjectUrl(null)
        URL.revokeObjectURL(url)
      }
    } catch (err) {
      console.error('Failed to create object URL from base64 data', err)
      return undefined
    }
  }, [data, isDataUrl, mime])

  if (!dataUrl) return null

  return (
    <div className="dataurl-image" style={{ display: 'inline-block' }}>
      <img src={dataUrl} alt={alt} style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
      {objectUrl && (
        <div style={{ marginTop: 6 }}>
          <a href={objectUrl} download={downloadName} style={{ textDecoration: 'none' }}>
            <button type="button">Download</button>
          </a>
        </div>
      )}
    </div>
  )
}
