import BooksGrid from './components/Books/BooksGrid';
import Filters from './components/Filters/Filters';
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import SidebarMenu from './components/UI/SidebarMenu';
import { BooksProvider } from './context/BooksContext';
import { FilteredProvider } from './context/FiltersContext';
import './index.css';
import Hero from './sections/Hero';

function App() {

  return (
    <BooksProvider>
      <FilteredProvider>
        <Header />

        <main className=' bg-slate-100 relative z-10'>
          <Hero />
          <Filters />
          <span className='flex justify-center items-center mt-8 font-hind uppercase text-2xl'>Click to add the book to your reading list</span>
          <BooksGrid />
        </main>

        <Footer />
        <SidebarMenu />
      </FilteredProvider>
    </BooksProvider>
  );
}

export default App;
