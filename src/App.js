import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />

  return(
    <ChatEngine 
      height="100vh"
      projectID="62ad886f-e25d-4f3e-b14b-fc18504fbafe" // String that's produced when a chat application initiates
      userName={localStorage.getItem('username')} // Username of currently logged in person
      userSecret={localStorage.getItem('password')} // User password
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    
    />
  );
}

export default App;