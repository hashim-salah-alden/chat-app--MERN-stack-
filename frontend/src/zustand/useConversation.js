import { create } from "zustand";

const useConversation = create((set) => ({
  searchedConversations: null,
  setSearchedConversations: (searchedConversations) =>
    set({ searchedConversations }),
  conversations: [],
  selectedConversation: null,
  setConversations: (conversations) => set({ conversations }),
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
