import BooksGrid from './components/Books/BooksGrid';
import Filters from './components/Filters/Filters';
import Header from './components/UI/Header';
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
          <BooksGrid />
        </main>
      </FilteredProvider>
    </BooksProvider>
  );
}

export default App;
