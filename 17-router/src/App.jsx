import { useState } from 'react'
import MessageList from './components/MessageList'
import ComposeMessage from './components/ComposeMessage'

export default function App() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Alice', text: 'Hello!', timestamp: Date.now() - 1000 * 60 * 60 },
    { id: 2, user: 'Bob', text: 'Hi Alice!', timestamp: Date.now() - 1000 * 60 * 30 },
    { id: 3, user: 'Alice', text: 'How are things?', timestamp: Date.now() - 1000 * 60 * 35 }
  ])

  function sendMessage(text) {
    const nextId = messages.length + 1
    const msg = {
      id: nextId, user: 'You',
      text: text, timestamp: Date.now()
    }

    console.log(msg)
    messages.push(msg)
    setMessages([...messages])
  }

  function deleteMessage(messageId) {
    setMessages(messages.filter(m => m.id !== messageId));
  }

  return (
    <div className="app">
      <h1>Simple Chat</h1>
      <MessageList messages={messages} onDelete={deleteMessage} />
      <ComposeMessage onSend={sendMessage} />
    </div>
  )
}
