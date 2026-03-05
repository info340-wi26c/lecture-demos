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

  return (
    <div className="chat-window">
      {messages.map((m) => (
        <div className="message" key={m.timestamp}>
          <button
            aria-label="Delete message"
            onClick={() => onDelete(m.id)}
            className="delete-btn"
          >
            X
          </button>

          <strong>{m.user}:</strong> {m.text}

          <div className="messageMeta">
            <div>
              <button className="edit-btn" onClick={toggleEditInput}>Edit</button>
              <input type="text" style={{ visibility: 'hidden' }} defaultValue={m.text} />
            </div>

            <div className="messageTimestamp">
              {formatTimestamp(m.timestamp)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
function formatTimestamp(ts) {
  if (!ts) return '';
  const d = ts instanceof Date ? ts : new Date(Number(ts));
  if (isNaN(d.getTime())) return '';

  const fmt = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const parts = fmt.formatToParts(d);
  const get = (type) => {
    const p = parts.find((part) => part.type === type);
    return p ? p.value : '';
  };

  const weekday = get('weekday');
  const month = get('month');
  const day = get('day');
  const hour = get('hour');
  const minute = get('minute');
  const dayPeriod = get('dayPeriod');

  return `${weekday}, ${month} ${day} ${hour}:${minute} ${dayPeriod}`;
}