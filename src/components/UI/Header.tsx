import BookIcon from "../../icons/BookIcon";
import BurguerMenuIcon from "../../icons/BurguerMenuIcon";
import { navbarStore } from "../../store/navbarStore";

const Header = () => {
    const navbarMenu = navbarStore(state => state.navbarState);
    const openNavbarMenu = navbarStore(state => state.openNavbarMenu);
    return (
        <nav className='py-6 flex justify-between fixed top-0 bg-slate-900 w-full z-20 px-2'>
            <a href="/" className='flex items-center  gap-x-2 uppercase font-hind text-2xl font-regular text-white'><BookIcon className='size-10 fill-slate-900' /> Casper Editorial</a>
            {!navbarMenu && <button onClick={openNavbarMenu}><BurguerMenuIcon className="text-white mr-2 size-8" /></button>}
        </nav>
    );
};

export default Header;
