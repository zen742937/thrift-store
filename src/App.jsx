import './App.css'
// TODO 3：import 商品資料 PRODUCTS（從 './products.js'）
//   提示：import { PRODUCTS } from './products.js'   ← 注意 PRODUCTS 用 { } 包（具名匯出）
import { PRODUCTS } from './products.js'

// TODO 4：import ProductCard 元件（從 './components/ProductCard.jsx'）
//   提示：import ProductCard from './components/ProductCard.jsx'   ← 這個不用 { }（預設匯出）
import ProductCard from './components/ProductCard.jsx'

function App() {
  return (
    <div>
      <h1>我的二手衣</h1>

      {/* Day 31 TODO：把「只顯示一張」改成「用 map 顯示全部」
          - 用 PRODUCTS.map(...) 把每一筆 product 渲染成一個 <ProductCard />
          - 每個都要傳 key={product.id} 和 product={product}
          （跟 Day 28 的 filtered.map 一模一樣，只是這裡先 map 全部 PRODUCTS） */}

      {PRODUCTS.map(product =>{
        return <ProductCard key={product.id} product={product}/>
      })
      }


    </div>
  );
 }

export default App
