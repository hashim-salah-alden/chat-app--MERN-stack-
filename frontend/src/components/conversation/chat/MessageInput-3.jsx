import { useState } from "react";
import useSendMessage from "../../../hooks/useSendMessage.js";

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
          <svg
            height="25"
            viewBox="0 0 48 48"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleSubmit}
          >
            <path d="M4.02 42l41.98-18-41.98-18-.02 14 30 4-30 4z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </label>
      </div>
    </form>
  );
};

export default MessageInput;
