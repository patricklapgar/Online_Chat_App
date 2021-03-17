import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import UserMessage from './UserMessage';


const ChatFeed = (props) => {
    const { chats,  activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && (
                <div 
                    key={`read_${index}`}
                    className="read-receipt"
                    style={{
                        float: isMyMessage ? 'right' : 'left',
                        backgroundImage: person.person.avatar && `url(${person.person.avatar})`
                    }}
                />
            ))
    }

    // Create new functional component to generate user messages
    const renderMessages = () => {
        const keys = Object.keys(messages);

        // Render messages
        return keys.map((key, index) => {
            const message = messages[key];

            // If there are messages, find the last message
            const lastMessageKey = index === 0 ? null : keys[index - 1];

            // Condition to test if the message belongs to the current user
            const isMyMessage = userName === message.sender.username;

            return(
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {/* Render Message */}

                        {
                            isMyMessage ? <MyMessage message={message}/> : <UserMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }

                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft:  isMyMessage ? '0px' : '68px'}}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )

        })
    }

    if(!chat){
        return 'Loading Chat Room :) ...';
    }

    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => `${person.person.username} `)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed;