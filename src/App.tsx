import BooksGrid from './components/Books/BooksGrid';
import Header from './components/UI/Header';
import { BooksProvider } from './context/BooksContext';
import { FilteredProvider } from './context/FiltersContext';
import './index.css';
import Hero from './sections/Hero';

function App() {

  return (
    <BooksProvider>
      <Header />

      <main className=' bg-slate-100 relative z-10'>
        <Hero />
        <FilteredProvider>
          {/* filters */}
          <BooksGrid />
        </FilteredProvider>
      </main>
    </BooksProvider>
  );
}

export default App;
