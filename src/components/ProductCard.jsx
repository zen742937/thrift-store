// ProductCard：顯示「一件」商品的卡片。
// 接 prop：product（一筆商品物件，有 name / price / category / size）
// 這就是你 Day 28 寫過的 ProductCard，只是現在搬到「獨立檔案」。

function ProductCard({ product }) {
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
    </div>
  )

}

export default ProductCard
