import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../services/axios-global";
import useConversation from "../zustand/useConversation";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const {conversations, setConversations} = useConversation();
  useEffect(() => {
    const useGetConversations = async () => {
      setLoading(true);
      try {
        const res = await API.get("api/users");

        if (res.error) {
          throw new Error(res.error);
        }

        setConversations(res.data);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
    };
    useGetConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
