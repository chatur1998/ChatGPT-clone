import React, { useState } from "react";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import { sendMessageToApi } from "./api/chat";

interface Chat {
  id: number;
  title: string;
  messages: { sender: string; text: string }[];
}

const App: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([
    { id: Date.now(), title: "Chat 1", messages: [] },
  ]);
  const [activeChatId, setActiveChatId] = useState<number>(chats[0].id);
  const [areMessageUpdated, setAreMessagesUpdated] = useState<boolean>(false);

  const handleNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: `Chat ${chats.length + 1}`,
      messages: [],
    };
    setChats([...chats, newChat]);
    setActiveChatId(newChat.id);
  };

  const handleSendMessage = async (message: string) => {
    setAreMessagesUpdated(false);
    const updatedChats = chats.map((chat) => {
      if (chat.id === activeChatId) {
        const userMessage = { sender: "user", text: message };
        chat.messages.push(userMessage);
        return chat;
      }
      return chat;
    });
    setChats(updatedChats);

    const response = await sendMessageToApi(message);
    const updatedChatsWithResponse = chats.map((chat) => {
      if (chat.id === activeChatId) {
        const botMessage = { sender: "bot", text: response.response };
        chat.messages.push(botMessage);
        return chat;
      }
      return chat;
    });
    setAreMessagesUpdated(true);
    setChats(updatedChatsWithResponse);
  };

  const handleRegenerateResponse = async () => {
    const lastUserMessage = chats
      .find((chat) => chat.id === activeChatId)
      ?.messages.filter((msg) => msg.sender === "user")
      .pop()?.text;
    if (lastUserMessage) {
      handleSendMessage(lastUserMessage);
    }
  };

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  return (
    <div className="flex h-screen">
      <div className="w-1/4 border-r overflow-y-auto">
        <ChatList
          chats={chats}
          activeChatId={activeChatId}
          onSelectChat={setActiveChatId}
          onNewChat={handleNewChat}
        />
      </div>
      <div className="flex-1 flex flex-col">
        {activeChat && (
          <ChatWindow
            messages={activeChat.messages}
            onSendMessage={handleSendMessage}
            onRegenerateResponse={handleRegenerateResponse}
            chatTitle={activeChat.title}
            areMessagesUpdate={areMessageUpdated}
          />
        )}
      </div>
    </div>
  );
};

export default App;
