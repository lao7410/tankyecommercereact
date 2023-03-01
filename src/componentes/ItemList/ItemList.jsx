import Item from "../ItemList/Item"

const ItemList = ({ products }) => {
  return (
    products.map(product => <Item key={product.id} product={product} />)
  )
}

export default ItemList

