// ProductCard：顯示「一件」商品的卡片。
// 接 prop：product（一筆商品物件，有 name / price / category / size）
// 這就是你 Day 28 寫過的 ProductCard，只是現在搬到「獨立檔案」。

function ProductCard({ product }) {
  // TODO 1：return 一個 <div>，顯示 product 的 name / 價格（NT$）/ 分類 / 尺寸
  //         （跟 Day 28 一模一樣，直接照寫）
  return (
    <div className="productCard">
      <p>{product.name}</p>
      <p className="productPrice">價格：NT${product.price}</p>
      <p>分類：{product.category}</p>
      <p>尺寸：{product.size}</p>
    </div>
  )

}

// TODO 2：把 ProductCard 「開放出去」，App.jsx 才 import 得到它
//   提示：在這裡寫一行 export default ProductCard

export default ProductCard
