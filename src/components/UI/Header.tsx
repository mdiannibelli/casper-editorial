import BookIcon from "../../icons/BookIcon";

const Header = () => {
    return (
        <nav className='py-12 flex absolute z-20 px-2'>
            <a href="/" className='flex items-center  gap-x-2 uppercase font-hind text-2xl font-regular text-white'><BookIcon className='size-10 fill-slate-900' /> Casper Editorial</a>
        </nav>
    );
};

export default Header;
