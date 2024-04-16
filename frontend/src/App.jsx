import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from 'react';
const Home = lazy(() => import('./pages/home/Home'));
const Login = lazy(() => import('./pages/login/Login'));
const SignUp = lazy(() => import('./pages/signup/SignUp'));
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
