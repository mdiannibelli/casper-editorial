import { BooksData } from "../types/BookType";
import mockBooks from '../mock/books.json';

// Contract
export async function getBooks(): Promise<BooksData> {
    return new Promise((resolve) => (
        setTimeout(() => {
            resolve(mockBooks);
        }, 50)
    ));
}