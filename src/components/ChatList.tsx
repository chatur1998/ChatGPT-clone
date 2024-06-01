import React from "react";
import { List } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import ChatListHeader from "./ChatListHeader";

type ChatListProps = {
  chats: { id: number; title: string }[];
  activeChatId: number;
  onSelectChat: (id: number) => void;
  onNewChat: () => void;
}

const ChatList: React.FC<ChatListProps> = ({
  chats,
  activeChatId,
  onSelectChat,
  onNewChat,
}) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between">
        <ChatListHeader onNewChat={onNewChat} />
      </div>
      <List
        dataSource={chats}
        renderItem={(chat) => (
          <div
            className={`cursor-pointer m-4 p-2 flex items-center ${
              chat.id === activeChatId ? "bg-blue-100" : "bg-gray-200"
            } hover:bg-blue-50 rounded-md`}
            onClick={() => onSelectChat(chat.id)}
          >
            <MessageOutlined className="text-xl mr-4" />
            <span className="text-lg">{chat.title}</span>
          </div>
        )}
      />
    </div>
  );
};

export default ChatList;
