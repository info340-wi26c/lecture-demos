import { useState } from 'react';

export default function MessageList(props) {
  const { channelName } = props;

  let count = 0;

  const [messages, setMessages] = useState([
    "Apples are crunchy",
    "Bananas soft and yellow/white",
    "I like Oranges",
    "Kiwis are fuzzy and weird",
    "Mangos make for great chutney",
  ]);

  let msgComps = messages.map((m, i) => {
    const el = <li key={i}>{m}</li>;
    return el;
  });

  
  function handleClick() {
    console.log("i am here");
    messages.push("Strawberries grow really well in Seattle");
    console.log(messages);

    setMessages([...messages]);
  }

  return (
    <div>
      <h1>{channelName}</h1>
      <ul>
        {msgComps}
      </ul>
      <input type="text"></input>
      <button onClick={handleClick}>Send</button>
    </div>
  );
}