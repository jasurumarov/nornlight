import { Route, Routes } from "react-router-dom"
import './scss/style.scss'

// Pages
import Home from "./pages/home/Home"

// Components
import SupHeader from "./components/supHeader/SupHeader"
import Header from "./components/header/Header"
import SearchInput from "./components/searchInput/SearchInput"

function App() {
  return (
    <>
      <SupHeader />
      <Header />
      <SearchInput />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
