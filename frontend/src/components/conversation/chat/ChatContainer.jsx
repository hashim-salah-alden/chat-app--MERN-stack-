import ChatHeader from "./ChatHeader-1";
import Messages from "./Messages-2";
import MessageInput from "./MessageInput-3";
import { TiMessages } from "react-icons/ti";

import { useAuthContext } from "../../../context/AuthContext";
import useConversation from "../../../zustand/useConversation";

const ChatContainer = () => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();

  return (
    <div className="h-[100%]">
      {selectedConversation && (
        <div className="h-screen flex flex-col justify-between container  ">
          <ChatHeader />
          <Messages />
          <MessageInput />
        </div>
      )}

      {!selectedConversation && (
        <div className="flex flex-col items-center justify-center w-full h-full ">
          <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
            <p className="text-[#402e58]">Welcome 👋 {authUser.fullName} ❄</p>
            <p className="text-[#402e58]">Select a chat to start messaging</p>
            <TiMessages className="text-3xl md:text-6xl text-center text-[#402e58]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatContainer;
