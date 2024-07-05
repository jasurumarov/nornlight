import { Route, Routes } from "react-router-dom"
import './scss/style.scss'

// Pages
import Home from "./pages/home/Home"
import AllProducts from "./pages/allProducts/AllProducts"
import Favorites from "./pages/favorites/Favorites"
import DetailProductPage from "./pages/detailProductPage/DetailProductPage"
import Blog from "./pages/blog/Blog"
import Garant from "./pages/garant/Garant"
import Return from "./pages/return/Return"
import Shipping from "./pages/shipping/Shipping"
import Contact from "./pages/contact/Contact"
import About from "./pages/about/About"
import Catalog from "./pages/catalog/Catalog"
import Cart from "./pages/cart/Cart"
import Auth from "./pages/auth/Auth"
import Login from "./pages/login/Login"
import Admin from "./pages/admin/Admin"
import CreateCategory from "./pages/admin/create-category/CreateCategory"
import ManageCategory from "./pages/admin/manage-category/ManageCategory"
import CreateProduct from "./pages/admin/create-product/CreateProduct"
import ManageProduct from "./pages/admin/manage-product/ManageProduct"

// Components
import SupHeader from "./components/supHeader/SupHeader"
import Header from "./components/header/Header"
import SearchInput from "./components/searchInput/SearchInput"
import Footer from "./components/footer/Footer"
import NotFound from "./components/notFound/NotFound"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/return" element={<Return />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/register" element={<Login />} />

        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} >
            <Route path='create-products' element={<CreateProduct />} />
            <Route path='manage-products' element={<ManageProduct />} />
            <Route path='create-users' element={<CreateCategory />} />
            <Route path='manage-users' element={<ManageCategory />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
