import React from 'react';
import { Link } from 'react-router-dom';

const Sobre = () => {
    return (
        <div>
            <h1>Sobre</h1>
            <Link to="/Home">retornar a página inicial</Link>
        </div>
    );
}

export default Sobre;