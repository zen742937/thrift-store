// ProductCard：顯示「一件」商品的卡片。
// 接 prop：product（一筆商品物件，有 name / price / category / size）
// 這就是你 Day 28 寫過的 ProductCard，只是現在搬到「獨立檔案」。

// Day 35 TODO H：卡片也要接住 addToCart（它從 App→ProductWall→這裡，傳了兩層）
//   把下面改成 function ProductCard({ product, addToCart }) {
//   （一個元件要收多個 prop，就在 { } 裡用逗號隔開）
function ProductCard({ product,addToCart }) {
  return (
    <div className="productCard">
      {/* Day 34 TODO B：在商品名稱「上面」放一張圖
          - 用 <img /> 標籤（它沒有結尾標籤，要自己收尾，寫成 <img ... />）
          - src 要綁這件商品的圖片網址：想想上一個檔案你加的欄位叫什麼，用 { } 接出來
          - alt 放這件商品的名稱（看不到圖時顯示的替代文字，也對無障礙有幫助）
          - className 給 "productImage"，等等 CSS 要靠它調大小
          自己寫寫看，卡住再叫我 */}
      <img src={product.image} alt={product.name} className="productImage"/>
      <p>{product.name}</p>
      <p className="productPrice">價格：NT${product.price}</p>
      <p>分類：{product.category}</p>
      <p>尺寸：{product.size}</p>
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
