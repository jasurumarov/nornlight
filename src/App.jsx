import { Route, Routes, useLocation } from "react-router-dom"
import './scss/style.scss'

// Pages
import Home from "./pages/home/Home"
import AllProducts from "./pages/allProducts/AllProducts"

// Components
import SupHeader from "./components/supHeader/SupHeader"
import Header from "./components/header/Header"
import SearchInput from "./components/searchInput/SearchInput"
import Footer from "./components/footer/Footer"
import DetailProductPage from "./pages/detailProductPage/DetailProductPage"
import { useEffect } from "react"

function App() {
  return (
    <>
      <SupHeader />
      <Header />
      <SearchInput />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<DetailProductPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
