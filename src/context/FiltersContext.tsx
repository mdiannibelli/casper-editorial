import { createContext, ReactNode, useEffect, useState } from "react";
import { useBooks } from "../hooks/useBooks";
import { Book } from "../types/BookType";
import { INPUT_MAX_PAGES_TOLERANCE } from "../constants/pages";

export interface Filters {
    genre: string
    maxPages: number;
    defaultFilters: {
        allGenres: string[];
        bookWithMorePages: number;
    };
}

export interface FilteredContextType {
    filters: Filters
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
    filteredBooks: Book[]
}

export const FiltersContext = createContext<FilteredContextType | undefined>(undefined);

export function FilteredProvider({ children }: { children: ReactNode }) {
    const { books } = useBooks();
    const [filters, setFilters] = useState<Filters>({
        genre: '',
        maxPages: 0,
        defaultFilters: {
            allGenres: [],
            bookWithMorePages: 0
        }
    });

    useEffect(() => {
        if (!books.length) return;

        const getMaxTotalPages = () => {
            const booksWithMorePages = books.reduce((maxPages, book) => {
                return book.pages > maxPages ? book.pages : maxPages;
            }, -Infinity);
            return booksWithMorePages + INPUT_MAX_PAGES_TOLERANCE;
        };

        const getUniqueGenres = () => {
            const allGenres = books.map(book => book.genre);
            const uniqueGenres = new Set([...allGenres]);
            return [...uniqueGenres];
        };

        const maxPages = getMaxTotalPages();

        setFilters(prevState => ({
            ...prevState,
            maxPages: maxPages,
            defaultFilters: {
                allGenres: getUniqueGenres(),
                bookWithMorePages: maxPages
            }
        }));
    }, [books]);

    const filterBooks = (books: Book[]) => {
        return books.filter((book) => (!filters.genre || filters.genre === book.genre) && book.pages <= filters.maxPages);
    };

    const filteredBooks = filterBooks(books);

    return (
        <FiltersContext.Provider value={{ filters, setFilters, filteredBooks }}>
            {children}
        </FiltersContext.Provider>
    );

}


