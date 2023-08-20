// ChatPopup.js
import React, { useState, useRef, useEffect } from "react";
import './chatbot.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

const ChatPopup = () => {
  const containerRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      message: "Hi, welcome to XPT, do you have any problems with mental health ?, feel free to share it with us !",
      sentTime: "just now",
      sender: "Professor"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "professor") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      }).then((data) => {
        return data.json();
      }).then((data) => {
        console.log(data);
        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          sender: "Professor"
        }]);
        setIsTyping(false);
      });
  }

  useEffect(() => {
    // Use useEffect to scroll the container to the bottom whenever messages change
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupSrc, setPopupSrc] = useState("");

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const togglePopup = () => {
    setPopupOpen((prevPopupOpen) => !prevPopupOpen);
  };

  return (
    <div>
      <button className="chatbot-btn" onClick={togglePopup}></button>
      {isPopupOpen && (
        <div className="App-cb">
          <div className="chatbox" ref={containerRef}> {/* Attach the ref to the chatbox */}
            <MainContainer>
              <ChatContainer>
                <MessageList
                  ref={containerRef} // Attach the ref to the MessageList too
                  scrollBehavior="smooth"
                  typingIndicator={isTyping ? <TypingIndicator content="Professor is typing" /> : null}
                >
                  {messages.map((message, i) => {
                    console.log(message)
                    return <Message key={i} model={message} />
                  })}
                </MessageList>
                <MessageInput placeholder="Type message here" onSend={handleSend} />
              </ChatContainer>
            </MainContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
