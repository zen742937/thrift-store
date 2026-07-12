import { Link } from 'react-router-dom'


function ProductCard({ product,addToCart }) {
  return (
    <div className="productCard">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="productImage"/>
        <p>{product.name}</p>
        <p className="productPrice">價格：NT${product.price}</p>
        <p>分類：{product.category}</p>
        <p>尺寸：{product.size}</p>
      </Link>
      <button onClick={() => addToCart(product)} className="addToCartButton">加入購物車</button>

      {/* Day 35 TODO I：加一顆按鈕，點了就把「這件商品」加入購物車
          - <button onClick={...}>加入購物車</button>
          - ⚠️ onClick 要綁「箭頭函式」：onClick={() => addToCart(product)}
            想一下為什麼不能直接寫 onClick={addToCart(product)}？
            （提示：回想 Day 32 分類按鈕你也是用 () => 包起來的，差別在「現在執行」vs「點了才執行」）
          - className 可給 "addToCartButton"（樣式之後再美化，先求能動） */}

    </div>
  )

}

export default ProductCard
