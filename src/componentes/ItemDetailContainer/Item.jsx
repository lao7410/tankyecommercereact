import React from 'react'
import { Link } from 'react-router-dom'

export const Item = (props) => {
    const {product} = props
    return (
        <div className="d-flex justify-content-center">
            <div className="card-deck">
                {product.map((producto) => (
                    <div key={producto.id} className="card mx-2" style={{ margin: "20px", display: "inline-block", width: "250px" }}>
                        <div className="card-header text-center">{producto.name}</div>
                        <div className="card-body text-center">
                            <img src={producto.image} alt="foto" className="product-image w-100" />
                        </div>
                        <div className="card-body text-center">
                            <Link to={`/category/${producto.category}`}>
                                Categpria: {producto.category}
                            </Link>
                        </div>
                        <div className="card-body text-center"> U$s{producto.price}
                            <Link to={`/detail/${producto.id}`}>
                                <button className="btn btn-outline-primary w-100 mt-2">
                                    Detalles
                                </button>
                            </Link>
                        </div>
                    </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Item;