// src/chatbotConfig.js
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage("Hello! How can I assist you today?")],
  botName: "Assistant",
  customStyles: {
    botMessageBox: {
      backgroundColor: "black",
    },
    chatButton: {
      backgroundColor: "#854a69",
    },
  },
};

export default config;
