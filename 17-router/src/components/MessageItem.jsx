function MessageItem(props) {
  const {deleteHandler, message} = props;

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

  return (
    <div className="message">
      <button
        aria-label="Delete message"
        onClick={() => deleteHandler(message.id)}
        className="delete-btn"
      >
        X
      </button>

      <strong>{message.user}:</strong> {message.text}

      <div>
        <button className="edit-btn" onClick={toggleEditInput}>Edit</button>
        <input type="text" style={{ visibility: 'hidden' }} defaultValue={message.text} />
      </div>
    </div>
  );
}

export default MessageItem;