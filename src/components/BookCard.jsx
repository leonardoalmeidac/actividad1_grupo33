import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './BookCard.css';

const BookCard = ({ book, onAddToCart }) => {
    return (
        <article className="book-card">
            <img src={book.image} alt={book.title} className="book-card__image" />
            <div className="book-card__content">
                <h3 className="book-card__title">{book.title}</h3>
                <p className="book-card__author">{book.author}</p>
                <p className="book-card__price">${book.price.toFixed(2)}</p>
                <div className="book-card__actions">
                    <Link to={`/book/${book.id}`} className="book-card__link">Ver detalle</Link>
                    <Button variant="secondary" onClick={() => onAddToCart(book)}>Añadir</Button>
                </div>
            </div>
        </article>
    );
};

export default BookCard;
