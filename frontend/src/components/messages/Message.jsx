import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-green-700" : "";

  const shakeClass = message.shouldShake ? "shake" : "";
  const [likesNo, setLikesNo] = useState(0);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2 relative group`}
      >
        {message.message}
        <button
          className={`like ${likesNo > 0 ? "" : "hidden"} indicator absolute ${
            chatClassName === "chat-start"
              ? "left-[90%] top-1/2"
              : "right-[90%] top-1/2"
          } w-9 h-9  bg-green-600 rounded-full ${
            chatClassName === "chat-start" ? "group-hover:flex" : ""
          } pl-2 pt-1`}
          onClick={() => setLikesNo((pre) => pre + 1)}
        >
          👍<span className="badge badge-sm indicator-item bg-red-700 border-none">{likesNo}</span>
        </button>
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};
export default Message;
