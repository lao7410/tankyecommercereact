import { useState } from "react"

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const handleSubstract = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const handleOnAdd = () => {
        (count <= stock)
        onAdd(count)
        setCount(initial)

    }

    return (
        <div className="card mt-5 w-50" >
            <div className="card-body row">
                <div className="col">
                    <button className="btn btn-outline-dark w-100" onClick={handleAdd} disabled={count >= stock}> + </button>
                </div>
                <div className="col">
                    <center>
                        <label>{count}</label>
                    </center>
                </div>
                <div className="col">
                    <button className="btn btn-outline-dark w-100" onClick={handleSubstract} disabled={count <= initial}> - </button>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-dark w-100" onClick={handleOnAdd} disabled={count <= 0}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
