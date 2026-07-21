import './App.css'
import { useState } from 'react'
import ProductWall from './components/ProductWall.jsx'
import Cart from './components/Cart.jsx'
import { useEffect } from 'react'
import { supabase } from './supabaseClient'
import { Routes,Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail.jsx'
import Navbar from './components/Navbar.jsx'


function App() {

  const [cart,setCart] = useState([]);
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);

  function addToCart(product){
    setCart([...cart,product]);
  }

  function removeByName(name){
    const newCart = cart.filter(p => p.name !== name);
    setCart(newCart);
  }

  function clearCart(){
    setCart([]);
  }

  useEffect(() => {
    async function loadProducts() {
      const { data } = await supabase.from('products').select('*');
      setProducts(data);
      setLoading(false);
    }
    loadProducts()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={
        <>
          <ProductWall addToCart={addToCart} products={products} loading={loading}/>
          <Cart cart={cart} clearCart={clearCart} removeByName={removeByName}/>
        </>
      } />
      <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App
