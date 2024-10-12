import { useState } from "react";
import useSendMessage from "../../../hooks/useSendMessage.js";
import { IoMdSend } from "react-icons/io";


const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className=" z-50" onSubmit={handleSubmit}>
      <div className="relative ml-0">
        <label className="input input-bordered flex items-center gap-2 rounded-none">
          <input
            type="text"
            className="grow "
            placeholder="Type Your Message Here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit"><IoMdSend size={25}/></button>

        </label>
      </div>
    </form>
  );
};

export default MessageInput;
