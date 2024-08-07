
import { useFilters } from '../../hooks/useFilters';

const BooksGrid = () => {
    const { filteredBooks } = useFilters();
    return (
        <section id='books' className='grid grid-cols-4 justify-center  justify-items-center gap-24 max-w-[1082px] mx-auto py-24'>
            {
                filteredBooks.map((book, index) => (
                    <div key={index} className='flex flex-col min-h-[200px] min-w-[200px]'>
                        <picture>
                            <img src={book.cover} alt={book.title} className='w-[180px] h-[280px]' />
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
