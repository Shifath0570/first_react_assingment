
import './App.css'
import Navbar from './Component/navbar/Navbar'
import Banner from './Component/Banner/Banner'
import Rating from './Component/Rating/Rating'
import Products from './Component/Products/Products'
import Cart from './Component/Cart/Cart'
import CardSection from './Component/CardSection/CardSection'
import Pricing from './Component/Pricing/Pricing'
import WorkFlow from './Component/WorkFlow/WorkFlow'
import Footer from './Component/Footer/Footer'
import { useState } from 'react'


const getProducts = async () => {
  const res = await fetch('/productData.json')
  return res.json()
}
const productPromise = getProducts()


function App() {

  const [active, setActive] = useState("product")
  const [carts, setCarts] = useState([]);


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Rating></Rating>

      <div className="tabs tabs-box justify-center bg-transparent mb-10">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-30 text-lg" aria-label="Product" defaultChecked onClick={() => setActive("product")} />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-30 text-lg" aria-label={`Cart (${carts.length})`} onClick={() => setActive("cart")} />
      </div>

      {
        active == "product" && <Products productPromise={productPromise} carts={carts} setCarts={setCarts}></Products>
      }

      {
        active == "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>
      }

      
      
      <CardSection></CardSection>
      <Pricing></Pricing>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  )
}

export default App
