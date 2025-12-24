import React from 'react';
import Layout from '../components/Layout';
import BookCard from '../components/BookCard';
import booksData from '../data/books.json';
import { useCart } from '../context/CartContext';
import { useSearch } from '../hooks/useSearch';

import './Home.css';

const Home = () => {
    const { searchTerm, setSearchTerm, filteredItems: filteredBooks } = useSearch(booksData, 'title');
    const { addToCart } = useCart();

    return (
        <Layout>
            <section className="home">
                <header className="home__header">
                    <h2 className="home__title">Catálogo de Libros</h2>
                    <div className="home__search">
                        <input
                            type="text"
                            placeholder="Buscar por título..."
                            className="home__input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </header>
                <div className="home__grid">
                    {filteredBooks.map(book => (
                        <BookCard key={book.id} book={book} onAddToCart={addToCart} />
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Home;
