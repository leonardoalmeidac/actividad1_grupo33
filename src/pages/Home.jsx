import React, { useState } from 'react';
import Layout from '../components/Layout';
import BookCard from '../components/BookCard';
import booksData from '../data/books.json';
import { useCart } from '../context/CartContext';
import { useSearch } from '../hooks/useSearch';

import './Home.css';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const { searchTerm, setSearchTerm, filteredItems: searchedBooks } = useSearch(booksData, 'title');
    const { addToCart } = useCart();

    const categories = ['Todos', ...new Set(booksData.map(book => book.category))];

    const filteredBooks = searchedBooks.filter(book =>
        selectedCategory === 'Todos' || book.category === selectedCategory
    );

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
                    <div className="home__categories">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`home__category-btn ${selectedCategory === cat ? 'home__category-btn--active' : ''}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>

                {filteredBooks.length > 0 ? (
                    <div className="home__grid">
                        {filteredBooks.map(book => (
                            <BookCard key={book.id} book={book} onAddToCart={addToCart} />
                        ))}
                    </div>
                ) : (
                    <div className="home__no-results">
                        <p>No se encontraron libros que coincidan con tu búsqueda.</p>
                        <button className="btn btn--primary" onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }}>
                            Ver todos los libros
                        </button>
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default Home;

