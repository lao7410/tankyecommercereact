import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h1>Error, la página no existe, modificaste la URL manualmente </h1> <br />
            <p>Click <Link to='/'> acá </Link> y volve a inicio</p> <br />
        </div>
    )
}
export default Error