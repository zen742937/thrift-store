// ProductWall：商品牆。管 state（搜尋字 + 選的分類）、算篩選結果、組畫面。
// 這就是你 Day 28 寫過的 ProductWall，搬進真專案、變成獨立元件檔。

// ── imports（幫你寫好，注意 useState 從 react 來、其餘從專案檔來）──
import { useState } from 'react'
import { PRODUCTS, CATEGORIES } from '../products.js'   // 兩個具名匯出，一起用 { } 拿
import ProductCard from './ProductCard.jsx'

function ProductWall() {
  // TODO 1：兩個 state（同 Day 28）
  //   - keyword：搜尋字，初始 ""
  //   - selectedCategory：選的分類，初始 "全部"
  const [keyword,setKeyword] = useState("")
  const [selectedCategory,setSelectedCategory] = useState("全部")

  // TODO 2：算 filtered（同 Day 28）——同時符合「分類」+「搜尋」
  //   分類：selectedCategory === "全部" 就全留，否則只留 product.category === selectedCategory
  //   搜尋：product.name.includes(keyword)
  //   一個 filter 裡用 && 串兩條件
  const filtered = PRODUCTS.filter(product => {
    const 分類符合 = selectedCategory === "全部" || product.category === selectedCategory;
    const 搜尋符合 = product.name.includes(keyword);
    return 分類符合 && 搜尋符合;
  })

  return (
    <div>
      <h1>我的二手衣</h1>

      {/* TODO 3：搜尋框（受控 input，綁 keyword） */}
      <input className="searchBox" value={keyword} onChange={e => setKeyword(e.target.value)} />

      {/* TODO 4：分類按鈕（CATEGORIES.map 成 <button>，點了 setSelectedCategory(category)，記得 key） */}
      <div className="categoriesBox">

      {CATEGORIES.map(category => {
        return <button className="categoriesButton" key={category} onClick={() => setSelectedCategory(category)}>{category}</button>
      })}
      </div>

      {/* TODO 5：商品列表（filtered.map 渲染 <ProductCard key={...} product={...} />） */}
      <div className='productWallGrid'>
      {filtered.map(product => {
        return <ProductCard key={product.id} product={product}/>
      })
      }
      </div>

      {/* TODO 6（加分）：filtered.length === 0 時用 && 顯示「找不到符合的商品」 */}
      {filtered.length === 0 && <p>找不到符合的商品</p>}
    </div>
  );
}

export default ProductWall
