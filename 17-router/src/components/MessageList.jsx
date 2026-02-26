import MessageItem from './MessageItem.jsx';

export default function MessageList(props) {
  const { messages, onDelete } = props;
  
  return (
    <div className="chat-window">
      {messages.map(m => 
        <MessageItem key={m.id} deleteHandler={onDelete} message={m} />
      )}
    </div>
  )
}
