import { useState, useMemo } from 'react';

export const useSearch = (items, searchField) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = useMemo(() => {
        if (!searchTerm) return items;
        return items.filter(item =>
            item[searchField].toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [items, searchTerm, searchField]);

    return {
        searchTerm,
        setSearchTerm,
        filteredItems
    };
};