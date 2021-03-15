import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return(
    <ChatEngine 
      height="100vh"
      projectID="62ad886f-e25d-4f3e-b14b-fc18504fbafe" // String that's produced when a chat application initiates
      userName="patricklapgar" // Username of currently logged in person
      userSecret="123123" // User password
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    
    />
  );
}

export default App;