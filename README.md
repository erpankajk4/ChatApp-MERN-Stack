# ChatApp
![Screenshot 2024-04-16 231326](https://github.com/erpankajk4/Aeonaxy-Assignment-Full-Stack/assets/118353291/4d7eb207-b5dd-4843-9bd3-b2cda3716fe4)

## Deployed link- 
https://chatapp-mern-stack.onrender.com/   <br>
Note: Page reloads may take up to 20 seconds as free deployment

## Tech Stack
### Backend
- **Node.js**: JavaScript runtime environment for executing server-side code.
- **zustand**: A state management library that manages the application's state efficiently.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing blog posts, users, and comments.
- **bcryptjs**: Library for hashing passwords.
- **jsonwebtoken**: Library for creating and verifying JSON Web Tokens (JWT).
- **dotenv**: Module for loading environment variables from a `.env` file.
- **cookie-parser**: Middleware for parsing cookies.
- **socket.io**: for establishing WebSocket connections

### Frontend
- **React.js**: JavaScript library for building user interfaces.
- **React Router DOM**: Library for routing in React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: Library for using icons in React applications.
- **emoji-mart**: A library for adding emojis to the chat.
- **socket.io-client**: The client-side library for establishing WebSocket connections with the server using Socket.io.
- **Vite**: Build tool and development server for frontend development.

### Features-
- User SignUp/SignIn functionality for authentication.
- Ability to add emojis during chat for richer communication.
- Like button that appears on chat hover, allowing multiple likes (likes count is not stored in the backend currently).
- Robust error handling on both frontend and backend.
- Organized, scalable folder structure for easier maintenance and future development.
- Efficient state management using Zustand.


## Setup
To set up the project, follow these steps:
1. Download or clone the repository.
2. Unzip the template provided in the zip file onto your local system.
3. Run the following commands:
   ```
   npm install
   npm run dev
   ```
4. Visit the local server to view.


📦chat-app-mern<br>
 ┣ 📂backend<br>
 ┃ ┣ 📂controllers<br>
 ┃ ┃ ┣ 📜auth.controller.js<br>
 ┃ ┃ ┣ 📜message.controller.js<br>
 ┃ ┃ ┗ 📜user.controller.js<br>
 ┃ ┣ 📂db<br>
 ┃ ┃ ┗ 📜connectToMongoDB.js<br>
 ┃ ┣ 📂middleware<br>
 ┃ ┃ ┗ 📜protectRoute.js<br>
 ┃ ┣ 📂models<br>
 ┃ ┃ ┣ 📜conversation.model.js<br>
 ┃ ┃ ┣ 📜message.model.js<br>
 ┃ ┃ ┗ 📜user.model.js<br>
 ┃ ┣ 📂routes<br>
 ┃ ┃ ┣ 📜auth.routes.js<br>
 ┃ ┃ ┣ 📜message.routes.js<br>
 ┃ ┃ ┗ 📜user.routes.js<br>
 ┃ ┣ 📂socket<br>
 ┃ ┃ ┗ 📜socket.js<br>
 ┃ ┣ 📂utils<br>
 ┃ ┃ ┗ 📜generateToken.js<br>
 ┃ ┗ 📜index.js<br>
 ┣ 📂frontend<br>
 ┃ ┣ 📂public<br>
 ┃ ┃ ┣ 📜bg.png<br>
 ┃ ┃ ┗ 📜vite.svg<br>
 ┃ ┣ 📂src<br>
 ┃ ┃ ┣ 📂assets<br>
 ┃ ┃ ┃ ┣ 📂sounds<br>
 ┃ ┃ ┃ ┃ ┗ 📜notification.mp3<br>
 ┃ ┃ ┃ ┗ 📜react.svg<br>
 ┃ ┃ ┣ 📂components<br>
 ┃ ┃ ┃ ┣ 📂messages<br>
 ┃ ┃ ┃ ┃ ┣ 📜BgSvg.jsx<br>
 ┃ ┃ ┃ ┃ ┣ 📜Message.jsx<br>
 ┃ ┃ ┃ ┃ ┣ 📜MessageContainer.jsx<br>
 ┃ ┃ ┃ ┃ ┣ 📜MessageInput.jsx<br>
 ┃ ┃ ┃ ┃ ┗ 📜Messages.jsx<br>
 ┃ ┃ ┃ ┣ 📂sidebar<br>
 ┃ ┃ ┃ ┃ ┣ 📜Conversation.jsx<br>
 ┃ ┃ ┃ ┃ ┣ 📜Conversations.jsx<br>
 ┃ ┃ ┃ ┃ ┣ 📜LogoutButton.jsx<br>
 ┃ ┃ ┃ ┃ ┣ 📜SearchInput.jsx<br>
 ┃ ┃ ┃ ┃ ┗ 📜Sidebar.jsx<br>
 ┃ ┃ ┃ ┗ 📂skeletons<br>
 ┃ ┃ ┃ ┃ ┗ 📜MessageSkeleton.jsx<br>
 ┃ ┃ ┣ 📂context<br>
 ┃ ┃ ┃ ┣ 📜AuthContext.jsx<br>
 ┃ ┃ ┃ ┗ 📜SocketContext.jsx<br>
 ┃ ┃ ┣ 📂hooks<br>
 ┃ ┃ ┃ ┣ 📜useGetConversations.js<br>
 ┃ ┃ ┃ ┣ 📜useGetMessages.js<br>
 ┃ ┃ ┃ ┣ 📜useListenMessages.js<br>
 ┃ ┃ ┃ ┣ 📜useLogin.js<br>
 ┃ ┃ ┃ ┣ 📜useLogout.js<br>
 ┃ ┃ ┃ ┣ 📜useSendLikes.js<br>
 ┃ ┃ ┃ ┣ 📜useSendMessage.js<br>
 ┃ ┃ ┃ ┗ 📜useSignup.js<br>
 ┃ ┃ ┣ 📂pages<br>
 ┃ ┃ ┃ ┣ 📂home<br>
 ┃ ┃ ┃ ┃ ┗ 📜Home.jsx<br>
 ┃ ┃ ┃ ┣ 📂login<br>
 ┃ ┃ ┃ ┃ ┗ 📜Login.jsx<br>
 ┃ ┃ ┃ ┗ 📂signup<br>
 ┃ ┃ ┃ ┃ ┣ 📜GenderCheckbox.jsx<br>
 ┃ ┃ ┃ ┃ ┗ 📜SignUp.jsx<br>
 ┃ ┃ ┣ 📂utils<br>
 ┃ ┃ ┃ ┣ 📜emojis.js<br>
 ┃ ┃ ┃ ┗ 📜extractTime.js<br>
 ┃ ┃ ┣ 📂zustand<br>
 ┃ ┃ ┃ ┗ 📜useConversation.js<br>
 ┃ ┃ ┣ 📜App.jsx<br>
 ┃ ┃ ┣ 📜index.css<br>
 ┃ ┃ ┗ 📜main.jsx<br>
 ┃ ┣ 📜.eslintrc.cjs<br>
 ┃ ┣ 📜index.html<br>
 ┣ 📜package.json<br>
