import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import API from "../services/axios-global.js";

import useConversation from "../zustand/useConversation.js";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const { setSelectedConversation } = useConversation();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await API.post("/api/auth/logout");

      if (res.error) {
        throw new Error(res.error);
      }

      localStorage.removeItem("chat-user");
      setSelectedConversation(null);
      setAuthUser(null);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
