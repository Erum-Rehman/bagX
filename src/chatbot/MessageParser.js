// src/MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      this.actionProvider.handleHello();
    } else if (lowerCaseMessage.includes("bags")) {
      this.actionProvider.handleBags();
    } else if (lowerCaseMessage.includes("price")) {
      this.actionProvider.handlePrice();
    } else if (lowerCaseMessage.includes("delivery")) {
      this.actionProvider.handleDelivery();
    } else if (lowerCaseMessage.includes("support")) {
      this.actionProvider.handleSupport();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;
