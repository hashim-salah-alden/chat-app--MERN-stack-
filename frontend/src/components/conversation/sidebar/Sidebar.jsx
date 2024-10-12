import React from "react";
import { IoMenu } from "react-icons/io5";
import SearchInput from "./SearchInput";
import useGetConversations from "../../../hooks/useGetConversations.js";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../../../utils/emojis.js";
import LogoutButton from "./LogoutButton.jsx";

import { useAuthContext } from "../../../context/AuthContext.jsx";
import useConversation from "../../../zustand/useConversation.js";

const Sidebar = () => {
  const { authUser } = useAuthContext();
  const { loading, conversations } = useGetConversations();
  const { searchedConversations } = useConversation();

  return (
    <div className="drawer md:drawer-open w-[auto] z-30">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        {/* Page content here */}
        <div className="bg-[#35244e] h-screen fixed top-0 left-0 min-w-[10%] ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button md:hidden bg-opacity-0 border-0"
          >
            <IoMenu />
          </label>
        </div>
      </div>
      <div className="drawer-side md:!w-[350px]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <div className="drawer-contentt h-full bg-[#402e58] flex flex-col gap-8 p-4 max-w-[70%] md:max-w-[100%]">
          {authUser && (
            <div className="border-b-2 flex gap-2 items-center py-4  rounded p-2  cursor-pointer ">
              <div className={`avatar  "online " }`}>
                <div className="w-10 rounded-full">
                  <img src={authUser.profilePic} alt="user avatar" />
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                  <p className="font-bold text-gray-200 text-[14px] capitalize">
                    {authUser.fullName}
                  </p>
                </div>
              </div>
              <div className=" md:hidden">
                <LogoutButton />
              </div>
            </div>
          )}
          <SearchInput />
          <div className=" flex flex-col overflow-auto">
            {searchedConversations &&
              searchedConversations.map((conversation, idx) => (
                <Conversation
                  key={conversation._id}
                  conversation={conversation}
                  emoji={getRandomEmoji()}
                  lastIdx={idx === conversations.length - 1}
                />
              ))}

            {!searchedConversations &&
              conversations.map((conversation, idx) => (
                <Conversation
                  key={conversation._id}
                  conversation={conversation}
                  emoji={getRandomEmoji()}
                  lastIdx={idx === conversations.length - 1}
                />
              ))}

            {loading ? (
              <span className="loading loading-spinner mx-auto"></span>
            ) : null}
          </div>
          <div className="md:mt-auto hidden md:block">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
