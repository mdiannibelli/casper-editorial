import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

export function useBooks() {
    const booksContext = useContext(BooksContext);
    if (!booksContext) throw new Error("Error in Books Context");

    const { books } = booksContext;

    return {
        books: books
    };
}