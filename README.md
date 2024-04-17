# MERN Full Stack Assignment given by Aeonaxy Technologies Private Limited
![Screenshot 2024-04-16 231326](https://github.com/erpankajk4/Aeonaxy-Assignment-Full-Stack/assets/118353291/4d7eb207-b5dd-4843-9bd3-b2cda3716fe4)

## Deployed link- 
https://aeonaxy-assignment-full-stack-1.onrender.com
Note: Page reloads may take up to 20 seconds as free deployment

## Tech Stack
### Backend
- **Node.js**: JavaScript runtime environment for executing server-side code.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing blog posts, users, and comments.
- **bcryptjs**: Library for hashing passwords.
- **jsonwebtoken**: Library for creating and verifying JSON Web Tokens (JWT).
- **dotenv**: Module for loading environment variables from a `.env` file.
- **cookie-parser**: Middleware for parsing cookies.
- **Node Mailer**: for mailer configuration
### Frontend
- **React.js**: JavaScript library for building user interfaces.
- **react-circular-progressbar:** Circular progress bar component for React.
- **Redux Toolkit**: State management library for managing application state.
- **Redux Persist**: Library for persisting and rehydrating a redux store.
- **React Router DOM**: Library for routing in React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: Library for using icons in React applications.
- **Vite**: Build tool and development server for frontend development.


### Features-
- User SignUp is secured with permission checks.
- Access control restricts Profile, Looking-for, and Email-verification pages pages based on sign-in status.
- Thank-you emails sent on user data updates.
- Robust error handling on frontend and backend.
- Scalable, organized folder structure.
- Efficient state management with Redux.
- Persistent user sessions across reloads.
- Live conversation updates with bell sound because of sockets

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


Aeonaxy-Full-Skack<br>
 ┣ 📂backend<br>
 ┃ ┣ 📂controllers<br>
 ┃ ┃ ┣ 📜auth.controller.js<br>
 ┃ ┃ ┗ 📜user.controller.js<br>
 ┃ ┣ 📂models<br>
 ┃ ┃ ┗ 📜user.model.js<br>
 ┃ ┣ 📂routes<br>
 ┃ ┃ ┣ 📜auth.route.js<br>
 ┃ ┃ ┗ 📜user.route.js<br>
 ┃ ┣ 📂utils<br>
 ┃ ┃ ┣ 📜error.js<br>
 ┃ ┃ ┗ 📜verifyUser.js<br>
 ┃ ┗ 📜index.js<br>
 ┣ 📂frontend<br>
 ┃ ┣ 📂public<br>
 ┃ ┣ 📂src<br>
 ┃ ┃ ┣ 📂assets<br>
 ┃ ┃ ┃ ┗ 📂img<br>
 ┃ ┃ ┣ 📂common<br>
 ┃ ┃ ┃ ┣ 📜Footer.jsx<br>
 ┃ ┃ ┃ ┣ 📜Logo.jsx<br>
 ┃ ┃ ┃ ┣ 📜Navbar.jsx<br>
 ┃ ┃ ┃ ┗ 📜PrivateRoute.jsx<br>
 ┃ ┃ ┣ 📂pages<br>
 ┃ ┃ ┃ ┣ 📂components<br>
 ┃ ┃ ┃ ┃ ┗ 📜AsideBanner.jsx<br>
 ┃ ┃ ┃ ┣ 📜EmailVer.jsx<br>
 ┃ ┃ ┃ ┣ 📜Home.jsx<br>
 ┃ ┃ ┃ ┣ 📜LookingFor.jsx<br>
 ┃ ┃ ┃ ┣ 📜Profile.jsx<br>
 ┃ ┃ ┃ ┣ 📜SignIn.jsx<br>
 ┃ ┃ ┃ ┗ 📜SignUp.jsx<br>
 ┃ ┃ ┣ 📂redux<br>
 ┃ ┃ ┃ ┣ 📂user<br>
 ┃ ┃ ┃ ┃ ┗ 📜userSlice.js<br>
 ┃ ┃ ┃ ┗ 📜store.js<br>
 ┃ ┃ ┣ 📜App.jsx<br>
 ┃ ┃ ┣ 📜index.css<br>
 ┃ ┃ ┣ 📜main.jsx<br>
 ┃ ┃ ┗ 📜store.js<br>
