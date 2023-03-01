import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div fluid >
            <h1>Error, la página no existe o modificaste el ID manualmente a uno que no existe.</h1> <br/>
            <p>Click <Link to='/'> acá </Link> y volve a inicio</p> <br/>
            <p>Click <Link to='/category'> acá </Link> y volve a categorias</p> <br/>
        </div>
    )
}
export default Error