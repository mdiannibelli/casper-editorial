const Hero = () => {
    return (
        <section className='flex flex-col justify-center items-center'>
            <div className='h-screen w-full bg-black absolute -z-10' />
            <div className='h-screen w-full bg-library-background bg-center opacity-30 relative -z-10' />

            <div className='absolute flex justify-center flex-col items-center'>
                <h1 className='text-white text-8xl font-hind font-semibold uppercase border-[4px] rounded py-8 px-8'>Casper Editorial</h1>
                <span className='text-white text-xl mt-8 font-light'>Find the book you are looking for, explore those you don't know, list those that interested you.</span>
                <a href='#books' className='text-xl text-white font-hind font-medium bg-slate-900 cursor-pointer hover:bg-slate-700 duration-300 py-2 px-6 rounded-md mt-8'>Show books</a>
                <aside className='mt-24'>
                    <q className='font-thin text-white text-xs'>"Dive into a world where every page is a gateway to new adventures, knowledge, and emotions; in our library, books are not just read, they are lived."</q>
                </aside>
            </div>

        </section>
    );
};

export default Hero;
