import { Routes, Route } from 'react-router-dom'
import MainPage from './views/MainPage'
import CartPage from './views/CartPage'
import ProductPage from './views/ProductPage'

import Header from './component/Header'
import FasionPage from './views/FasionPage'
import AccessoryPage from './views/AccessoryPage'
import DigitalPage from './views/DigitalPage'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [productList, setProductList] = useState ([]);
  
  async function getProductData() {
    const result = await fetch('https://fakestoreapi.com/products')
    const json = await result.json()

    setProductList(json)

    console.log(json)
  }
  useEffect(() => {
      getProductData()
  }, [])

  return (
    <>
      {/* <div>{productList}</div> */}
      <Header/>
      <Routes>
        {/* 페이지 이동시 해당 컴포넌트 페이지로 보여질 수 있는 */}
        <Route path="/" element={<MainPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/fasion" element={<FasionPage/>} />
        <Route path="/accessory" element={<AccessoryPage/>} />
        <Route path="/digital" element={<DigitalPage/>} />
        <Route path="/product/:productId" element={<ProductPage/>} />
      </Routes>
      <div>footer영역 항상 고정인 애들</div>
    </>
  )
}

export default App
