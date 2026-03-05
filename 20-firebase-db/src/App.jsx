import { useState, useEffect } from 'react'

import UserProfile from './components/UserProfile'

import { Link, Route, Routes } from 'react-router';
import ChatPage from './components/ChatPage';
import PageNotFound from './components/PageNotFound';
import FileUploader from './components/FileUploader';

import CHAT_LOG from './assets/data/chat_log.json';
import USERS from './assets/data/users.json';

import { 
  getDatabase,
  ref,
  set as fbSet,
  push as fbPush,
  onValue
} from 'firebase/database';

function App() {
  const [messages, setMessages] = useState(CHAT_LOG);

  const [currentUser, setCurrentUser] = useState(USERS[0]);
  
  useEffect(() => {
    const db = getDatabase();
    const messageRef = ref(db, 'message');

    onValue(messageRef, (snapshot) => {
      const data = snapshot.val();

      const messages = Object.keys(data).map(k => {
        return data[k];
      });
      setMessages(messages);
    })
  }, [])

  useEffect(() => console.log("Changed!!!"), [messages]);

  function sendMessage(text) {
    const db = getDatabase();
    const messageRef = ref(db, 'message');
    
    const nextId = messages.length + 1;
    const msg = {
      id: nextId,
      user: currentUser.name,
      text,
      timestamp: Date.now()
    };

    fbPush(messageRef, msg);

    messages.push(msg)
    setMessages([...messages])
  }

  function deleteMessage(messageId) {
    setMessages(messages.filter(m => m.id !== messageId));
  }

  return (
    <div className="app">
      <h1>Simple Chat</h1>
      <FileUploader onUpload={console.log} />
      <Routes>
        <Route path="user" element={<UserProfile user={ currentUser }/>}>
          <Route path=":userId" element={<UserProfile />} />
        </Route>
        <Route index element={<ChatPage messages={messages}
                                        deleteMessage={deleteMessage}
                                        sendMessage={sendMessage} />} />
        <Route path="*" element={< PageNotFound />} />
      </Routes>

      {/* User profile link, display on every page. */}
      <div className="user">
        <Link to="/user"><img src={currentUser.image} /></Link>
      </div>
    </div>
  )
}

export default App;