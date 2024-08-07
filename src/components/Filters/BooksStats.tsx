import BookIcon from "../../icons/BookIcon";
import CategoriesIcon from "../../icons/CategoriesIcon";
import { Book } from "../../types/BookType";

interface Props {
    books: Book[]
    allGenres: string[]
}

const BooksStats = ({ books, allGenres }: Props) => {
    return (
        <aside className="flex justify-center items-center gap-x-8">
            <div className="flex items-center gap-x-2">
                <BookIcon className="text-white" />
                <span className="text-white font-hind font-bold text-xl">{books.length}</span>
            </div>
            <div className="flex items-center gap-x-2">
                <CategoriesIcon className="text-white" />
                <span className="text-white font-hind font-bold text-xl">{allGenres.length}</span>
            </div>
            {/* //TODO: ADD BOOKS IN LIST! */}
        </aside>
    );
};

export default BooksStats;
