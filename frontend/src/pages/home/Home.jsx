import React from "react";
import Sidebar from "../../components/conversation/sidebar/Sidebar";
import ChatContainer from "../../components/conversation/chat/ChatContainer";

const Home = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="container h-screen ">
        <ChatContainer />
      </div>
    </div>
  );
};

export default Home;
