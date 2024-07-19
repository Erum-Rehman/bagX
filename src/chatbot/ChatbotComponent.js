// src/ChatbotComponent.js
import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import config from './chatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import 'react-chatbot-kit/build/main.css';
import './index.scss';
import { AiFillMessage } from "react-icons/ai";

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <AiFillMessage size={40} />
      </div>
      {isOpen && (
        <div className="chatbot-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            placeholderText="Type a message..."
          />
        </div>
      )}
    </>
  );
};

export default ChatbotComponent;
