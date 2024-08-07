import { useContext } from 'react';
import { FilteredContext } from '../context/FiltersContext';

export function useFilters() {
    const filteredContext = useContext(FilteredContext);
    if (!filteredContext) throw new Error("Error in Filtered Context");

    const { filteredBooks, filters, setFilters } = filteredContext;

    return {
        filteredBooks: filteredBooks,
        filters: filters,
        setFilters: setFilters
    };
}
