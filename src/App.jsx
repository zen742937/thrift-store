import './App.css'
import { useState } from 'react'
import ProductWall from './components/ProductWall.jsx'
import Cart from './components/Cart.jsx'
// Day 35 TODO A：import 新元件 Cart（從 './components/Cart.jsx'）
//   提示：它跟 ProductWall 一樣是 export default，import 不用 { }
//   ← 在這行下面自己寫一行 import


function App() {
  // Day 35 TODO B：購物車 state（狀態提升的關鍵）
  //   - 名字叫 cart，更新函式叫 setCart
  //   - 初始值是「空陣列」 []（一開始購物車是空的）
  //   const [cart, setCart] = useState(...)   ← 你寫
  const [cart,setCart] = useState([]);


  // Day 35 TODO C：加入購物車的函式 addToCart(product)
  //   目標：把傳進來的 product 加到 cart 後面。
  //   ⚠️ React 改陣列 state「不能」用 cart.push()！要做出「一個全新的陣列」再 setCart。
  //      （push 是改到原本那個陣列，React 偵測不到、畫面不會更新）
  //   提示：用展開語法 → setCart([ ...舊的cart, 新的product ])
  //   function addToCart(product) {
  //     ...
  //   }
  function addToCart(product){
    setCart([...cart,product]);
  }

  function clearCart(){
    setCart([]);
  }


  return (
    <div>
      {/* Day 35 TODO D：把 addToCart 傳給 ProductWall（商品牆的按鈕要用它）
          現在是空的 <ProductWall />，改成 <ProductWall addToCart={addToCart} /> */}
      <ProductWall addToCart={addToCart}/>

      {/* Day 35 TODO E：放購物車元件，並把 cart 傳進去
          寫成 <Cart cart={cart} /> */}
      <Cart cart={cart} clearCart={clearCart}/>

    </div>
  );
}

export default App
