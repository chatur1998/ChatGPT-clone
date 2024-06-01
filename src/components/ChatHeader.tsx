import React from "react";
import { Button } from "antd";
import {
  EllipsisOutlined,
  MessageOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const ChatHeader: React.FC<{ chatTitle: string }> = ({ chatTitle }) => {
  return (
    <header className="p-4 bg-white text-black flex justify-between items-center border-gray-300">
      <div className="flex items-center space-x-2">
        <MessageOutlined className="text-xl" />
        <h2 className="text-xl font-bold">{chatTitle}</h2>
      </div>
      <div className="flex items-center space-x-2">
        <Button icon={<EllipsisOutlined />} className="border-0" />
        <Button icon={<UploadOutlined />} className="border-0 shadow-gray-300 bg-gray-200 shadow-md" />
      </div>
    </header>
  );
};

export default ChatHeader;
