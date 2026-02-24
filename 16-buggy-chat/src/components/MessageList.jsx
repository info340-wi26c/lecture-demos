export default function MessageList(props) {
  const { messages, onDelete } = props;

  function toggleEditInput(event) {
    const input = event.target.parentNode.querySelector('input');
    if (!input) {
      return
    };

    if (input.style.visibility === 'hidden') {
      input.style.visibility = 'visible';
    } else {
      input.style.visibility = 'hidden';
    }

    if (input.style.visibility !== 'hidden') {
      input.focus();
    };
  }

  // Two bugs somewhere in this return statement
  //
  // (3) LOOK FOR THE SECOND ONE ONLY AFTER ADDING A DELETE BUTTON
  return (
    <div className="chat-window">
      {messages.map((m, index) => (
        <div className="message" key={index}>
          <button
            aria-label="Delete message"
            onClick={() => onDelete(m.id)}
            className="delete-btn"
          >
            X
          </button>

          <strong>{m.user}:</strong> {m.text}

          <div>
            <button className="edit-btn" onClick={toggleEditInput}>Edit</button>
            <input type="text" style={{ visibility: 'hidden' }} defaultValue={m.text} />
          </div>
        </div>
      ))}
    </div>
  )
}
