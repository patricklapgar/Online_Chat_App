import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setUserpassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        // Submission handles all events for user login
        event.preventDefault();

        const authObject = { 'Project-ID': "62ad886f-e25d-4f3e-b14b-fc18504fbafe", 'User-Name': username, 'User-Secret': password };

        // Create request to chatengine API
        try {
            // Have chat engine finds username/password and give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            // If successful, store username and password to local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            // If login is unsuccessful, return error or make user try different username/password
            setError('Uh oh! Incorrect credentials :(');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Patrick's Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="input" placeholder="Username" required />
                    <input type="text" value={password} onChange={(event) => setUserpassword(event.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting!</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )

}


export default LoginForm;