import { useState } from 'react'

function ComposeMessage(props) {
  const { onSend } = props;
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!text) return
    onSend(text)
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

export default ComposeMessage;