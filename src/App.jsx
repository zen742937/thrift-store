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

      {/* TODO 5：先測試一張——渲染「一個」 <ProductCard />，
          把第一筆商品 PRODUCTS[0] 當 product 傳進去。
          （這一步只是確認 import / 元件 / 資料三者有串起來，之後才用 map 渲染全部） */}
      <ProductCard key={PRODUCTS[0].id} product={PRODUCTS[0]} />

    </div>
  );
 }

export default App
