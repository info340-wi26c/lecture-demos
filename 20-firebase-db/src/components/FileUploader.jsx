import React, { useState } from 'react'

// FileUploader
// - Reads selected file(s) using FileReader as DataURL (base64 string)
// - Calls `onUpload(fileMeta)` where fileMeta = { name, type, size, data }
// - Set `stripDataPrefix` to true to remove the `data:<mime>;base64,` prefix
// Usage:
// <FileUploader onUpload={(file) => console.log(file)} />

export default function FileUploader({ multiple = false, onUpload, stripDataPrefix = false }) {
  const [files, setFiles] = useState([])

  function handleFilesSelected(e) {
    console.log(e);

    const chosen = Array.from(e.target.files || [])
    setFiles(chosen.map(f => ({ name: f.name, size: f.size, type: f.type })))

    chosen.forEach(file => {
      const reader = new FileReader()
      reader.onload = () => {
        const dataUrl = reader.result
        const data = stripDataPrefix ? stripPrefix(dataUrl) : dataUrl
        const payload = {
          name: file.name,
          type: file.type,
          size: file.size,
          data,
        }
        // Callback with encoded file suitable for storing as a string in Realtime DB
        if (typeof onUpload === 'function') onUpload(payload)
      }
      reader.onerror = (err) => {
        console.error('Failed to read file', file.name, err)
      }
      reader.readAsDataURL(file)
    })
  }

  function stripPrefix(dataUrl) {
    // data:<mime>;base64,<data>
    const comma = dataUrl.indexOf(',')
    return comma === -1 ? dataUrl : dataUrl.slice(comma + 1)
  }

  return (
    <div className="file-uploader">
      <label style={{ display: 'block', marginBottom: 6 }}>
        Choose file{multiple ? 's' : ''} to upload
      </label>
      <input type="file" multiple={multiple} onChange={handleFilesSelected} />

      {files.length > 0 && (
        <div style={{ marginTop: 8 }}>
          <strong>Selected</strong>
          <ul style={{ paddingLeft: 16 }}>
            {files.map((f, i) => (
              <li key={i}>{f.name} ({Math.round(f.size / 1024)} KB)</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
