import MessageList from './MessageList'
import ComposeMessage from './ComposeMessage'

function ChatPage(props) {
  const {messages, sendMessage, deleteMessage} = props;

  messages.sort((m1, m2) => m1.timestamp - m2.timestamp);

  return (
    <>
      <MessageList messages={messages} onDelete={deleteMessage} />
      <ComposeMessage onSend={sendMessage} />
    </>
  )
}

export default ChatPage;