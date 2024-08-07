import { createContext, useEffect, useState } from "react";
import { getBooks } from "../services/getBooks";
import { Book } from "../types/BookType";

interface BooksContextType {
    books: Book[];
}

export const BooksContext = createContext<BooksContextType | undefined>(undefined);

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        async function getInitialBooks() {
            const booksData = await getBooks();

            const mappedBooks: Book[] = booksData.library.map(({ book }) => {
                return {
                    title: book.title,
                    pages: book.pages,
                    genre: book.genre,
                    cover: book.cover,
                    synopsis: book.synopsis,
                    year: book.year,
                    ISBN: book.ISBN,
                    author: {
                        name: book.author.name,
                        otherBooks: book.author.otherBooks
                    }
                };
            });

            setBooks(mappedBooks);
        }

        getInitialBooks();
    }, []);

    return (
        <BooksContext.Provider value={{ books }}>
            {children}
        </BooksContext.Provider>
    );
};