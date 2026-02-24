export default function Message(props) {
  const { userName, text } = props;

  return (
    <div className="message d-flex mb-1">
      <div className="me-3">
        <img src={"/img/"+userName+".png"} alt={userName+"'s avatar"} />
      </div>
      <div>
        <p className="user-name">{userName}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}