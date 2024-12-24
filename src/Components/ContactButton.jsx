import React, { useState } from 'react';
import portfolioData from '../db/local';
import { useTranslation } from 'react-i18next';
import "./chatGpt.css"
const ChatButton = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);  // Chat ochilishini boshqarish
    const [message, setMessage] = useState('');  // Yozilgan habar
    const [messages, setMessages] = useState([]);  // Yozilgan xabarlar ro'yxati
    const { t, i18n } = useTranslation();

    // Chatni ochish
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    // Habarni yozishni boshqarish
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    // Habarni yuborish
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            setMessages([...messages, { text: message, id: Date.now() }]);
            setMessage('');  // Habarni tozalash
        }
    };

    return (
        <div>
            {/* Chat Button */}
            <button
                onClick={toggleChat}
                className="fixed bottom-4 right-4 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent transition-all duration-300"
            >
                <span className="text-2xl">💬</span>
            </button>

            {/* Chat Box (Modal) */}
            {isChatOpen && (
                <div className="fixed bottom-20 right-4 w-80 h-96 border-accent border rounded-lg  bg-primary z-50 shadow-lg   flex flex-col">
                    <div className="text-end px-4 pt-4">
                        <button
                            onClick={toggleChat}
                            className="text-accent text-xl"
                        >
                            ✖️
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto mb-4 scrollbar-hide">
                        <div className="space-y-2 p-4">
                            <p className='text-green-100 text-start'>
                                <i className="fas fa-robot mr-2"></i>{t(portfolioData.chatGpt?.[i18n.language])}
                            </p>
                            {messages.map((msg) => (
                                <div key={msg.id} className="bg-primary py-2 px-5 rounded-lg">
                                    <div className="flex items-center justify-end">
                                        <i className="fas fa-user mr-2 text-gray-100"></i>
                                        <p className="text-gray-100 text-end">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Chat Input */}
                    <form onSubmit={handleSubmit} className="flex">
                        <textarea
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Xabar yozing..."
                            className="w-full py-2 h-12 resize-none rounded-lg text-black placeholder-black border-none focus:outline-none focus:ring-0 px-4"
                        />
                        <button
                            type="submit"
                            className="bg-accent text-gray-800 py-2 px-4 rounded-lg "
                        >
                            Yuborish
                        </button>
                    </form>

                </div>
            )}
        </div>
    );
};

export default ChatButton;
