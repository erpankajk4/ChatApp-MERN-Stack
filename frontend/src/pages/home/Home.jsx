import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex w-full h-full rounded-lg overflow-hidden bg-zinc-700'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
