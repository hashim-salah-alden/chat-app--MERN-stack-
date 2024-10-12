import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import API from "../services/axios-global";
import { useAuthContext } from "../context/AuthContext.jsx";

const useLogin = () => {
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  const login = async (username, password) => {
    const success = handleInputErrors(username, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await API.post("/api/auth/login", {
        username,
        password,
      });

      if (res.error) {
        throw new Error(res.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(res.data));
      setAuthUser(res.data);
      // navigate("/");
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return {
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
    loading,
  };
};

export default useLogin;

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
