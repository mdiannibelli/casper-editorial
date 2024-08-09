
import { useFilters } from '../../hooks/useFilters';
import ToRead from '../../icons/ToRead';
import { userList } from '../../store/userListBooks';
import { Book } from '../../types/BookType';

const BooksGrid = () => {
    const { filteredBooks } = useFilters();
    const addBook = userList(state => state.addBook);
    const removeBook = userList(state => state.removeBook);
    const booksInList = userList(state => state.booksToRead);

    function addBookInList(newBook: Book) {
        addBook(newBook);
    }

    function removeBookInList(newBook: Book, event: React.MouseEvent) {
        event.stopPropagation();
        removeBook(newBook);
    }
    return (
        <section className='grid grid-cols-4 justify-center  justify-items-center gap-24 max-w-[1082px] mx-auto py-24'>
            {
                filteredBooks.map((book, index) => (
                    <div onClick={() => addBookInList(book)} key={index} className='cursor-pointer flex flex-col min-h-[200px] min-w-[200px]'>
                        <picture className='relative'>
                            {booksInList.some(b => b.ISBN === book.ISBN) &&
                                <div className='absolute flex flex-col items-center h-full w-full bg-black bg-opacity-65'>
                                    <span className='text-2xl flex justify-center items-center gap-x-2 text-white h-full font-hind'>
                                        <ToRead className='text-white size-8' />To Read
                                    </span>
                                    <button onClick={(event) => removeBookInList(book, event)} className='text-red-500 font-hind text-xs mb-8 rounded border-[1.5px] border-red-500  py-1 px-1 hover:bg-red-500 duration-300 hover:text-white'>Remove book from list</button>
                                </div>}
                            <img src={book.cover} alt={book.title} className='w-full h-[280px]' />
                        </picture>
                        <div className='mt-2 flex flex-col p-1'>
                            <span className='text-gray-900 font-semibold font-hind'>{book.title}</span>
                            <span className='text-gray-800 italic text-xs'>{book.author.name}</span>
                        </div>
                    </div>
                ))
            }
        </section>
    );
};

export default BooksGrid;
