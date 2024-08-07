import { createContext, ReactNode, useEffect, useState } from "react";
import { useBooks } from "../hooks/useBooks";
import { Book } from "../types/BookType";

export interface Filters {
    genre: string
    maxPages: number;
    defaultFilters: {
        allGenres: string[];
        bookWithMorePages: number;
    };
}

interface FilteredContextType {
    filters: Filters
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
    filteredBooks: Book[]
}

export const FilteredContext = createContext<FilteredContextType | undefined>(undefined);

export const FilteredProvider = ({ children }: { children: ReactNode }) => {
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

        const getMaxTotalPages = (): number => {
            const booksWithMorePages = books.reduce((maxPages, book) => {
                return book.pages > maxPages ? book.pages : maxPages;
            }, -Infinity);

            return booksWithMorePages;
        };

        const getUniqueGenres = () => {
            const genres = books.map((book => book.genre));
            const noRepeatedGenres = new Set([...genres]);

            return [...noRepeatedGenres];
        };

        const maxPosiblePages = getMaxTotalPages();

        setFilters(prevState => ({
            ...prevState,
            maxPages: maxPosiblePages,
            defaultFilters: {
                allGenres: getUniqueGenres(),
                bookWithMorePages: 0
            }
        }));
    }, [books]);

    const filterBooks = (books: Book[]) => {
        // Aquellos que no tengan filtro seleccionado o si hay un filtro seleccionado aquellos que tengan el mismo género del filtro
        // Aquellos donde la cantidad de páginas sea menor o igual a la máxima cantidad de páginas del filtro
        return books.filter(book => (!filters.genre || book.genre === filters.genre) && book.pages <= filters.maxPages);
    };

    const filteredBooks = filterBooks(books);

    return (
        <FilteredContext.Provider value={{ filters, filteredBooks, setFilters }}>
            {children}
        </FilteredContext.Provider >
    );
};