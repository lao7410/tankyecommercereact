import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import gFetch from "../utils/gfetch";
import Loading from "../Spiner/Loading"

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        gFetch()
            .then(res => {
                const product = res.find(p => p.id === id);
                setProduct(product);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [id]);


    return (
        <div>
            {loading && <Loading />}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
            </div>
            <h2>{product.name}</h2>
            <img src={product.image} alt="product image" />
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
        </div>
    )
};

export default ItemDetailContainer;