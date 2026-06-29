// Cart：購物車。只負責「顯示」cart 裡有什麼 + 算總金額。
// 它不自己管 state——cart 是 App 透過 prop 傳進來的（這就是狀態提升的「下傳」那一半）。

// Day 35 TODO J：接住 cart 這個 prop
//   把下面改成 function Cart({ cart }) {
function Cart({ cart,clearCart,removeFromCart }) {

  // Day 35 TODO K（加分）：算購物車總金額 total
  //   要把 cart 裡每件商品的 price 全部加起來。
  //   方法一（先求會）：先寫一個 let total = 0，再用 cart.forEach(item => { total += item.price })
  //   方法二（之後挑戰）：用 reduce → cart.reduce((sum, item) => sum + item.price, 0)
  //   ← 先用你看得懂的方法寫出來就好
  let total = 0;
  cart.forEach(item => { total += item.price});
  const grouped = [];
  for (const item of cart){
    const found = grouped.find(g => g.name === item.name)
    if(found){
    found.quantity ++;
    } else {
      grouped.push({name:item.name, price:item.price, quantity:1})
    }
  }

  return (
    <div className="cart">
      {/* Day 35 TODO L：標題顯示購物車數量
          例如 <h2>🛒 購物車（{cart.length}）</h2> */}
        <h2>🛒 購物車({cart.length})</h2>

      {/* Day 35 TODO M：列出購物車每一件商品
          - 用 cart.map(...) 把每件變成一行，例如 <p>{item.name} － NT${item.price}</p>
          - 記得每個 map 出來的元素要加 key
          - ⚠️ 同一件商品可能被加入多次，用 item.id 當 key 會重複出問題；
            這裡先用第二個參數「索引 index」當 key：cart.map((item, index) => ... key={index}) */}
      {grouped.map((item,index) => 
          <p key={item.name}>{item.name} x {item.quantity} - NT${item.price * item.quantity} </p>

          
      )}

      {/* Day 35 TODO N：顯示總金額
          例如 <p>總計：NT${total}</p> */}
      <p>總計:NT${total}</p>
      {(cart.length !== 0) && <button onClick={()=> clearCart()}>清空購物車</button>}
      


      {/* Day 35 TODO O（加分）：購物車是空的時候（cart.length === 0）顯示「購物車是空的」 */}
      {(cart.length === 0) && <p>購物車是空的</p>}

    </div>
  );
}

export default Cart
