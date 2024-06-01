import React, { useEffect, useRef } from "react";
import { Input, Button, message as antdMessage } from "antd";
import {
  SendOutlined,
  PlusOutlined,
  UserOutlined,
  OpenAIOutlined,
  LikeOutlined,
  DislikeOutlined,
  CopyOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import ChatHeader from "./ChatHeader";

interface ChatWindowProps {
  messages: { sender: string; text: string }[];
  onSendMessage: (message: string) => void;
  onRegenerateResponse: () => void;
  chatTitle: string;
  areMessagesUpdate: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  onSendMessage,
  onRegenerateResponse,
  chatTitle,
  areMessagesUpdate,
}) => {
  const [input, setInput] = React.useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('File uploaded:', file);
      // Handle file upload logic here
    }
  };

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        antdMessage.success('Text copied to clipboard!');
      },
      (err) => {
        antdMessage.error('Failed to copy text.');
        console.error('Could not copy text: ', err);
      }
    );
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [areMessagesUpdate]);

  return (
    <div className="flex flex-col flex-1 bg-white h-full relative">
      <ChatHeader chatTitle={chatTitle} />
      <div className="flex-1 overflow-y-auto p-4 mb-20">
        {messages.map((msg, index) => (
          <div key={index} className="mb-4 ml-8 flex justify-start">
            <div className="w-3/4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  {msg.sender === "user" ? (
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <UserOutlined />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                      <OpenAIOutlined />
                    </div>
                  )}
                </div>
                <div>
                  <div className="p-2 ">
                    <span>{msg.text}</span>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-center ml-16">
                {msg.sender !== "user" && (
                  <div className="flex space-x-3 mt-2">
                    <CopyOutlined className="cursor-pointer" onClick={() => handleCopyToClipboard(msg.text)} />
                    <LikeOutlined className="cursor-pointer" />
                    <DislikeOutlined className="cursor-pointer" />
                    <SyncOutlined
                      className="cursor-pointer"
                      onClick={onRegenerateResponse}
                    />
                  </div>
                )}
                {msg.sender !== "user" && (
                  <div className="flex space-x-2 mt-8">
                    <Button size="small" className="bg-gray-100 p-3 flex items-center border-0 font-semibold">Recommend Resources</Button>
                    <Button size="small" className="bg-gray-100 p-3 flex items-center border-0 font-semibold">Critique my design</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center p-4 bg-white border-gray-300 space-x-2 fixed bottom-0 right-0 w-3/4"
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Chat with me..."
          className="flex-1 h-12 rounded-full bg-gray-100 px-4"
          prefix={<PlusOutlined className="mr-8" onClick={handleFileInputClick} />}
          suffix={<Button type="primary" size="small" htmlType="submit" icon={<SendOutlined />} />}
        />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
      </form>
    </div>
  );
};

export default ChatWindow;
