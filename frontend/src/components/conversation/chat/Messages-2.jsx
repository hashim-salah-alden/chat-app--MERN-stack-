import { useEffect, useRef } from "react";
import useGetMessages from "../../../hooks/useGetMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton.jsx";
import Message from "./Message.jsx";
import useListenMessages from "../../../hooks/useListenMessages.js";
import { motion } from "framer-motion";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <motion.div
      className=" h-full container mx-auto bg-slate-50  md:ml-0 p-5 pr-0 pl-16 overflow-auto"
    >
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-[#402e58] font-medium text-lg-">
          Send a message to start the conversation
        </p>
      )}
    </motion.div>
  );
};

export default Messages;
