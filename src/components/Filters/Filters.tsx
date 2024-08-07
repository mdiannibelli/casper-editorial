import { useBooks } from "../../hooks/useBooks";
import { useFilters } from "../../hooks/useFilters";
import BooksStats from "./BooksStats";

const Filters = () => {
    const { books } = useBooks();
    const { filters, setFilters } = useFilters();
    const { maxPages, defaultFilters, genre } = filters;
    const { allGenres, bookWithMorePages } = defaultFilters;

    function handleMaxPages(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.valueAsNumber < 0) {
            return setFilters(prevState => ({ ...prevState, maxPages: 0 }));
        }
        setFilters(prevState => ({
            ...prevState,
            maxPages: e.target.valueAsNumber
        }));
    }

    function handleGenre(e: React.ChangeEvent<HTMLSelectElement>) {
        setFilters(prevState => ({ ...prevState, genre: e.target.value }));
    }


    return (
        <div className="flex justify-center items-center py-8 bg-slate-900 gap-x-32">
            <form className="flex gap-x-12">
                <div className="flex gap-4 items-center">
                    <label htmlFor="maxPages" className="text-white font-hind text-md w-full">Pages per book</label>
                    <input onChange={handleMaxPages} type="range" id="maxPages" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" min={100} max={bookWithMorePages} value={maxPages} />
                </div>
                <div className="flex gap-4 items-center">
                    <label htmlFor="maxPages" className="text-white font-hind text-md w-full">Genres</label>
                    <select name="genre" onChange={handleGenre} value={genre} id="genre">
                        <option value=''>All Genres</option>
                        {allGenres.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>
            </form>

            {/* //TODO: ADD BOOKS IN LIST */}
            <BooksStats allGenres={allGenres} books={books} />
        </div>
    );
};

export default Filters;
