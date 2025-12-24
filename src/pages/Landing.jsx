import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="landing">
            <div className="landing__content">
                <h1 className="landing__title">Tienda de libros Relatos de Papel Grupo 33</h1>
                <p className="landing__subtitle">Tu próxima historia comienza aquí</p>
                <div className="landing__loader"></div>
                <p className="landing__redirect-text">Entrando en 5 segundos...</p>
                <button className="btn btn--primary" onClick={() => navigate('/home')}>Acceder ahora</button>
            </div>
        </div>
    );
};

export default Landing;
