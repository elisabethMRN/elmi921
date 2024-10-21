import './App.css'
import Nav from './Navigations/Nav'
import Products from './Products/Products'
import Recommended from "../src/Recommended/Recommended"
import Sidebar from './Sidebar/Sidebar'

function App() {

  return (
    <>
    <Sidebar />
    <Nav />
    <Recommended />
    <Products />
    </>
  )
}

export default App