import Layout from "./layout/Layout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Home from "./pages/Home"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path="/" Component={Home} />
          <Route path="/shop" Component={Shop} />
          <Route path="/shop/:id" Component={Shop} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/cart" Component={Cart} />
        </Route>
      </Routes>
    </>
  )
}

export default App
