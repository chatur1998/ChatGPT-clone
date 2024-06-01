import React from 'react';
import { Button } from 'antd';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';

const ChatListHeader: React.FC<{ onNewChat: () => void }> = ({ onNewChat }) => {
  return (
    <header className="p-4 bg-white text-black flex justify-between items-center border-gray-300 w-full">
      <div className="flex items-center space-x-2">
        <UserOutlined className="text-2xl" />
        <h1 className="text-xl font-bold">Further AI</h1>
      </div>
      <Button onClick={onNewChat} icon={<PlusOutlined />} className="border-0" />
    </header>
  );
};

export default ChatListHeader;
