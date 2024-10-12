import { useState } from "react";
import useConversation from "../zustand/useConversation";
import API from "../services/axios-global";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState("");
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await API.post(
        `/api/messages/send/${selectedConversation._id}`,
        { message }
      );

      if (res.error) {
        throw new Error(res.error);
      }
      console.log(res);
      setMessages([...messages, res.data]);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};

export default useSendMessage;
