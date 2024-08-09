import { navbarStore } from '../../store/navbarStore';
import clsx from 'clsx';
import { IoCloseOutline } from 'react-icons/io5';
import { userList } from '../../store/userListBooks';
import '../styles/HideScrollBar.css';

const SidebarMenu = () => {
    const navbarMenu = navbarStore(state => state.navbarState);
    const closeNavbarMenu = navbarStore(state => state.closeNavbarMenu);
    const { booksToRead, removeBook } = userList();
    return (
        <div>
            {/* Background */}
            {
                navbarMenu &&
                <div className='fixed z-20 top-0 right-0 h-screen w-[20%] opacity-30 dark:bg-slate-800' />
            }

            {/* Blur Background */}
            {
                navbarMenu &&
                <div className='fixed z-20 top-0 right-0 h-screen w-[20%] backdrop-filter backdrop-blur-sm fade-in' />
            }

            {/* Nav */}
            <nav className={
                clsx(
                    'fixed z-20 top-0 right-0 w-[20%] h-screen bg-slate-300 dark:bg-slate-900 opacity-85 shadow-2xl transform transition-all duration-500',
                    { 'translate-x-[100%]': !navbarMenu }
                )
            }>
                <IoCloseOutline onClick={closeNavbarMenu} className='dark:text-white text-slate-700 absolute top-0 right-0 m-2' size={50} />
                <div className='flex flex-col items-center h-screen my-8 gap-y-8  [&>a]:mt-32 [&>a]:text-2xl overflow-scroll hide-scrollbar'>
                    {booksToRead.length <= 0 ? <span className='text-white flex justify-center items-center h-screen font-hind'>There are no books on the reading list.</span> :


                        booksToRead.map((book, i) => (
                            <div className='flex flex-col justify-end my-8' key={i}>
                                <div className='flex justify-between'>
                                    <span className='text-white font-hind font-semibold italic'>{book.year}</span>
                                    <button onClick={() => removeBook(book)}><IoCloseOutline className='text-red-500 border-2 border-red-500 rounded-xl' /></button>
                                </div>
                                <picture>
                                    <img className='w-32 h-full' src={book.cover} alt={book.title} />
                                </picture>
                                <span className='text-white font-hind font-medium mt-2 max-w-[140px]'>{book.title}</span>
                                <q className='italic text-white font-hind font-light'>{book.author.name}</q>
                            </div>
                        ))

                    }
                </div>
            </nav>
        </div>
    );
};

export default SidebarMenu;
