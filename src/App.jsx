import './App.css'
// Day 32 TODO A：import ProductWall 元件（從 './components/ProductWall.jsx'）
//   提示：它是 export default，所以 import 不用 { }
import ProductWall from './components/ProductWall.jsx'

function App() {
  return (
    <div>
      {/* Day 32 TODO B：在這裡放 <ProductWall />
          （商品牆的資料、state、篩選、清單都搬進 ProductWall 了，App 只負責放它） */}
      <ProductWall/>
    </div>
  );
}

export default App
