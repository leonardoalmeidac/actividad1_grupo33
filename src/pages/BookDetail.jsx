import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import booksData from '../data/books.json';
import { useCart } from '../context/CartContext';

import './BookDetail.css';

const BookDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const book = booksData.find(b => b.id === parseInt(id));

    if (!book) return <Layout><div>Libro no encontrado</div></Layout>;

    return (
        <Layout>
            <div className="book-detail">
                <img src={book.image} alt={book.title} className="book-detail__image" />
                <div className="book-detail__info">
                    <Link to="/home" className="book-detail__back">&larr; Volver</Link>
                    <h1 className="book-detail__title">{book.title}</h1>
                    <p className="book-detail__author">{book.author}</p>
                    <p className="book-detail__description">{book.description}</p>
                    <div className="book-detail__actions">
                        <span className="book-detail__price">${book.price.toFixed(2)}</span>
                        <Button variant="primary" onClick={() => addToCart(book)}>Añadir al carrito</Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BookDetail;
