import React from 'react'
import { FaBagShopping } from "react-icons/fa6"
import Category from "./Category/Category"
import Price from "./Price/Price"
import Colors from "./Colors/Colors"
import "./Sidebar.css"

function Sidebar() {
  return <>
  <section className="sidebar">
    <div className="logo-container">
        <h1>
        <FaBagShopping />
        </h1>
    </div>
    <Category />
    <Price />
    <Colors />
  </section>
  </>
}

export default Sidebar
