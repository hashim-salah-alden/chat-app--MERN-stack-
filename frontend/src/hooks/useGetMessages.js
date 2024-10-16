import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import API from "../services/axios-global";
import toast from "react-hot-toast"

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await API.get(`/api/messages/${selectedConversation._id}`);

        if (res.error) {
          throw new Error(res.error);
        }
        setMessages(res.data);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
