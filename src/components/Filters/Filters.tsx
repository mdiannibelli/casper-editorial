import { useBooks } from "../../hooks/useBooks";
import { useFilters } from "../../hooks/useFilters";
import BooksStats from "./BooksStats";
import '../styles/InputRange.css';

const Filters = () => {
    const { books } = useBooks();
    const { filters, setFilters } = useFilters();
    const { maxPages, defaultFilters, genre, query } = filters;
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

    function handleQuery(e: React.ChangeEvent<HTMLInputElement>) {
        setFilters(prevState => ({ ...prevState, query: e.target.value }));
    }


    return (
        <div className="flex justify-center items-center py-8 bg-slate-900 gap-x-32">
            <form id='books' className="flex gap-x-12">
                <div className="flex gap-4 items-center">
                    <label htmlFor="maxPages" className="text-white font-hind text-md w-full">Pages per book:</label>
                    <div className="PB-range-slider-div w-full">
                        <input onChange={handleMaxPages} type="range" id="maxPages" className="PB-range-slider" min={100} max={bookWithMorePages} value={maxPages} />
                        <p className="PB-range-slidervalue text-white">{maxPages}</p>

                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <label htmlFor="maxPages" className="text-white font-hind text-md w-full">Genres:</label>
                    <select name="genre" onChange={handleGenre} value={genre} id="genre" className="select-none outline-none bg-slate-600 rounded-md py-1 px-2 text-white">
                        <option value=''>All Genres</option>
                        {allGenres.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-center items-center">
                    <input onChange={handleQuery} value={query} type="text" placeholder="Enter the name of the book" className="select-none outline-none bg-slate-600 py-2 px-2 w-64 text-white" />
                </div>
            </form>

            <BooksStats allGenres={allGenres} books={books} />
        </div>
    );
};

export default Filters;
