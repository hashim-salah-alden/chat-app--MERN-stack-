import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../../zustand/useConversation.js";
import { MdOutlineCancel } from "react-icons/md";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSearchedConversations } = useConversation();
  const { conversations } = useConversation();
  const [searched, setSearched] = useState(false);

  const cancelSearch = () => {
    setSearch("");
    setSearchedConversations(null)
    setSearched("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.filter((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSearchedConversations(conversation);
      setSearched(true);
    } else toast.error("No such user found!");
  };

  return (
    <form
      className="flex items-center bg-[#35244d] rounded-[25px] "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered  bg-[#35244d] text-white rounded-[25px] max-w-[65%]"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        type="submit"
        className="btn btn-circle bg-opacity-0 border-0 text-white"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>

      {searched && (
        <button
          className="btn btn-circle bg-opacity-0 border-0 text-white"
          onClick={cancelSearch}
        >
          <MdOutlineCancel onC className="w-6 h-6 outline-none" />
        </button>
      )}
    </form>
  );
};

export default SearchInput;
