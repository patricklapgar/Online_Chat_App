const UserMessage = ({ lastMessage, message }) => {
    const isFirstMessageFromUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return(
        <div className="message-row">
            {isFirstMessageFromUser && (
                <div
                    className="message-avatar"
                    style={{backgroundImage: `url(${message.sender.avatar})`}}
                />
            )}

            {message.attachments && message.attachments.length > 0
             ? (
                <img 
                    src={message.attachments[0].file}
                    alt="message-attachment"
                    className="message-image"
                    style={{ marginLeft: isFirstMessageFromUser ? '4px' : '48px' }}
                />
            ) : (
                <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageFromUser ? '4px' : '48px' }}>
                    {message.text}
                </div>
            ) };               

        </div>
    )
}

export default UserMessage;