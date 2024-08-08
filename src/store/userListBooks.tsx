import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Book } from "../types/BookType";

interface State {
    booksToRead: Book[]
    addBook: (newBook: Book) => void
    removeBook: (book: Book) => void
}

export const userList = create<State>()(persist((set, get) => ({
    booksToRead: [],
    addBook: (newBook: Book) => {
        const { booksToRead } = get();
        const isBooksInList = booksToRead.some(book => book.ISBN === newBook.ISBN);
        if (isBooksInList) return;
        set((prevState) => ({ booksToRead: [...prevState.booksToRead, newBook] }));
    },
    removeBook: (book: Book) => {
        const { booksToRead } = get();
        const filteredBooks = booksToRead.filter(b => b.ISBN !== book.ISBN);
        set(() => ({ booksToRead: filteredBooks }));
    }
}), {
    name: 'USER_LIST'
}));