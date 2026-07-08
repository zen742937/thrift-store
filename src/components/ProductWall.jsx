// ProductWall：商品牆。管 state（搜尋字 + 選的分類）、算篩選結果、組畫面。
// 這就是你 Day 28 寫過的 ProductWall，搬進真專案、變成獨立元件檔。

// ── imports（幫你寫好，注意 useState 從 react 來、其餘從專案檔來）──
import { useState } from 'react'
import ProductCard from './ProductCard.jsx'

// Day 35 TODO F：ProductWall 現在要當「中轉站」——
//   它自己不用 addToCart，但要從 App 接住、再往下傳給 ProductCard。
//   把下面這行的 () 改成接 prop：function ProductWall({ addToCart }) {
function ProductWall({ addToCart,products }) {

  const [keyword,setKeyword] = useState("")
  const [selectedCategory,setSelectedCategory] = useState("All")

  const filtered = products.filter(product => {
    const 分類符合 = selectedCategory === "All" || product.category === selectedCategory;
    const 搜尋符合 = product.name.includes(keyword);
    return 分類符合 && 搜尋符合;
  })

  const categories = ["All",...new Set(products.map(product => product.category))]

  return (
    <div>
      <h1>我的二手衣</h1>

      {/* TODO 3：搜尋框（受控 input，綁 keyword） */}
      <input className="searchBox" value={keyword} onChange={e => setKeyword(e.target.value)} />

      {/* TODO 4：分類按鈕（CATEGORIES.map 成 <button>，點了 setSelectedCategory(category)，記得 key） */}
      <div className="categoriesBox">

      {categories.map(category => {
        return <button className="categoriesButton" key={category} onClick={() => setSelectedCategory(category)}>{category}</button>
      })}
      </div>

      {/* TODO 5：商品列表（filtered.map 渲染 <ProductCard key={...} product={...} />） */}
      {/* Day 35 TODO G：每張卡片也要拿到 addToCart，多傳一個 prop 下去
          把 <ProductCard ... /> 再加上 addToCart={addToCart} */}
      <div className='productWallGrid'>
      {filtered.map(product => {
        return <ProductCard key={product.id} product={product} addToCart={addToCart}/>
      })
      }
      </div>

      {/* TODO 6（加分）：filtered.length === 0 時用 && 顯示「找不到符合的商品」 */}
      {filtered.length === 0 && <p>找不到符合的商品</p>}
    </div>
  );
}

export default ProductWall
