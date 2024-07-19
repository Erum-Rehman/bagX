// src/ActionProvider.js
class ActionProvider {
  constructor(createChatbotMessage, setStateFunc) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
  }

  handleHello = () => {
    const message = this.createChatbotMessage("Hello! How can I assist you with our bag collection?");
    this.addMessageToState(message);
  };

  handleBags = () => {
    const message = this.createChatbotMessage("We have a variety of bags including handbags, backpacks, and clutches. You can browse our collection on the website.");
    this.addMessageToState(message);
  };

  handlePrice = () => {
    const message = this.createChatbotMessage("Our bags range from Rs,1000 to Rs,3000 depending on the style and material. Please specify which bag you're interested in for more details.");
    this.addMessageToState(message);
  };

  handleDelivery = () => {
    const message = this.createChatbotMessage("We offer free delivery on orders over Rs,2000. Standard delivery takes 3-5 business days.");
    this.addMessageToState(message);
  };

  handleSupport = () => {
    const message = this.createChatbotMessage("You can reach our support team at support@bagxstore.com or call us at (123) 456-7890.");
    this.addMessageToState(message);
  };

  handleUnknown = () => {
    const message = this.createChatbotMessage("I'm sorry, I didn't understand that. Can you please provide more details?");
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
