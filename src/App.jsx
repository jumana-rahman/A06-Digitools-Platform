import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Pricing from './components/Pricing'
import Stats from './components/Stats'
import Steps from './components/Steps'
import Products from "./components/Products";
import Cart from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from 'react'

function App() {
  const [view, setView] = useState("products");
  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // ✅ Add to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart");
  };

  // ✅ Remove from cart
  const handleRemove = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    toast.error("Removed from cart");
  };

  // ✅ Checkout
  const handleCheckout = () => {
    setCart([]);
    toast.info("Checkout successful");
  };
  
  return (
    <>
      
      <NavBar cartCount={cart.length}/>

      <Banner/>

      <Stats/>
      
      <div className='py-12'>
        <div className='max-w-[90%] mx-auto'>
          <h2 className='text-[48px] font-extrabold text-[#101727] text-center'>Premium Digital Tools</h2>

          <p className='text-[16px] font-normal text-[#627382] text-center'>Choose from our premium digital products designed <br /> to boost your productivity and creativity</p>

          <div className='text-center my-8'>
            <div className='w-fit mx-auto border border-zinc-100 rounded-full'>
              <button
              onClick={() => setView("products")}
              className={`btn rounded-full border-r-none ${
                view === "products"
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                  : "btn-ghost"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setView("cart")}
              className={`btn rounded-full border-l-none ${
                view === "cart"
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                  : "btn-ghost"
              }`}
            >
              Cart ({cart.length})
            </button>
            </div>
          </div>

          {view === "products" && (
        <Products products={products} onAdd={handleAddToCart} />
      )}

      {view === "cart" && (
        <Cart cart={cart} onRemove={handleRemove} onCheckout={handleCheckout} />
      )}

      <ToastContainer/>
        </div>
      </div>
      
      
      <div className="flex justify-center gap-4 my-6">
        

        
      </div>

      <Steps/>

      <Pricing/>


    </>
  )
}

export default App
