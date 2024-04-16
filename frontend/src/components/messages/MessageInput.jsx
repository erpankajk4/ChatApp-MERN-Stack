import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    };

    const handleEmojiSelect = (emoji) => {
        setMessage((prevMessage) => prevMessage + emoji.native);
    };

    return (
        <form className="px-4 my-3" onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                    placeholder="Send a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type="button"
                    className="absolute inset-y-0 right-14 flex items-center text-xl hover:border-2 rounded-full border-green-700 p-2"
                    onClick={() => setIsEmojiPickerOpen((prev) => !prev)}
                >
                    {isEmojiPickerOpen ? '😃' : '😄'}
                </button>
                {isEmojiPickerOpen && (
                    <div className="absolute bottom-11 right-5 z-10">
                        <Picker data={data} onEmojiSelect={handleEmojiSelect} />
                    </div>
                )}
                <button
                    type="submit"
                    className="absolute inset-y-0 right-5 flex items-center text-xl hover:text-green-400"
                >
                    {loading ? <div className="loading loading-spinner"></div> : <BsFillSendFill />}
                </button>
            </div>
        </form>
    );
};

export default MessageInput;
