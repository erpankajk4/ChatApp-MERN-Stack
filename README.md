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
