import { Link } from 'react-router-dom'


function ProductCard({ product,addToCart }) {
  return (
    <div className="productCard">
      <Link to={`/product/${product.id}`}>
        <img src={product.images?.[0]} alt={product.name} className="productImage"/>
        <p>{product.name}</p>
        <p className="productPrice">價格：NT${product.price}</p>
        <p>分類：{product.category}</p>
        <p>尺寸：{product.size}</p>
      </Link>
      <button onClick={() => addToCart(product)} className="addToCartButton">加入購物車</button>
    </div>
  )

}

export default ProductCard
