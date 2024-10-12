import useConversation from "../../../zustand/useConversation";

const ChatHeader = () => {
  const { selectedConversation } = useConversation();
  return (
    <div className="container mx-auto bg-slate-50  md:ml-0 p-5 pr-0 pl-16 border-b-2 flex items-center gap-2">
      <div className={`avatar "online " }`}>
        <div className="w-10 rounded-full">
          <img src={selectedConversation?.profilePic} alt="user avatar" />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-[#402e58] text-[14px] capitalize">
            {selectedConversation?.fullName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
