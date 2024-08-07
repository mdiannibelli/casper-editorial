import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext";

export function useFilters() {
    const filterContext = useContext(FiltersContext);
    if (!filterContext) throw new Error("Error in Filters Context");

    const { filters, filteredBooks, setFilters } = filterContext;
    return {
        filters,
        filteredBooks,
        setFilters
    };
}