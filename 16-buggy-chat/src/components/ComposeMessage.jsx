import { useState } from 'react'

export default function ComposeMessage(props) {
  const { onSend } = props;
  const [text, setText] = useState('')

  // (1) Bug in this function
  function handleSubmit(e) {
    e.preventDefault()
    if (!text) return
    onSend({ text: text })
    setText('')
  }

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message" />
      <button type="submit">Send</button>
    </form>
  )
}
