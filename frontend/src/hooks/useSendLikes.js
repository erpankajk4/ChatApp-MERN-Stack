import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendLikes = () => {
	const [loading, setLoading] = useState(false);
	const { likes, setLikes, selectedConversation } = useConversation();

	const sendMessage = async (likes) => {
		setLoading(true);
		try {
			const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify( likes ),
			});
			const data = await res.json();
			if (data.error) throw new Error(data.error);

			setLikes(likes, data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendLikes;
