## ChatGPT Clone with React, Vite, and TypeScript

This project is a front-end clone of the ChatGPT interface built using React, Vite, and TypeScript. It leverages Ant Design for UI components and Tailwind CSS for styling. The project includes features like file upload and message copying.

### Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Ant Design (Antd)**: A comprehensive UI framework for React.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

### Features

- **Dynamic Input Resizing**: The input box resizes based on the text content up to a maximum height.
- **File Upload**: Users can upload files via the input area.
- **Message Copying**: Users can copy the content of messages to the clipboard.
- **Chat History**: Maintains a record of conversations in a left pane.
- **Fixed Input Area**: The input area is fixed to the bottom of the page, while the chat window scrolls.

### Project Structure

The project is structured to keep the code modular and maintainable. Key components are separated into their own files:

- **`ChatWindow.tsx`**: Handles the main chat interface.
- **`ChatHeader.tsx`**: Displays the header of the chat window.
- **`ChatList.tsx`**: Displays the list of chats on the left pane.
- **`App.tsx`**: Main application component that brings everything together.

### Good Practices

- **Modular Code**: The code is split into reusable components, making it easier to manage and scale.
- **TypeScript**: Utilizes TypeScript for type safety, which helps in catching errors early and improving code quality.
- **Ant Design**: Uses Ant Design components for a consistent and professional UI.
- **Tailwind CSS**: Tailwind CSS is used for styling, allowing for rapid and responsive UI development.
- **Responsive Design**: The UI is designed to be responsive, ensuring a good user experience on both desktop and mobile devices.
- **Dummy API Simulation**: Simulates API responses to demonstrate how the chat interface would work with real backend data.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/chatgpt-clone.git
cd chatgpt-clone
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Usage

- Type a message in the input field and press Enter or click the send button to send the message.
- Click the plus icon next to the input field to upload a file.
- Click the copy icon below a system message to copy the message to the clipboard.

This README provides an overview of the project, including the tech stack, features, installation instructions, and usage guidelines. The project demonstrates best practices such as modularization, use of TypeScript, and UI consistency with Ant Design and Tailwind CSS.
