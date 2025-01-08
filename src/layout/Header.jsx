import React from 'react'
import { useNavigate } from 'react-router-dom'



function Header() {
    const navigate = useNavigate(); //usenavigate hook is used for navigate to route
  function openHome(){
    navigate('/')
  }
  function openShop(){
    navigate('/shop')
  }
  function openAbout(){
    navigate('/about')
  }
  function openContact(){
    navigate('/contact')
  }
  function openCart(){
    navigate('/cart')
  }
  return (
    <>
    <div className="flex justify-between px-8 py-4 items-center border-b-black border-b">
        <div className="logo w-36"><img src="/public/logo/logo.webp" alt="" /></div>
        <div className="menu flex">
            <h1 className='hover:bg-blue-100 py-2 px-4 rounded-lg cursor-pointer' onClick={openHome}>Home</h1>
            <h1 className='hover:bg-blue-100 py-2 px-4 rounded-lg cursor-pointer'onClick={openShop}>Shop</h1>
            <h1 className='hover:bg-blue-100 py-2 px-4 rounded-lg cursor-pointer'onClick={openAbout}>About</h1>
            <h1 className='hover:bg-blue-100 py-2 px-4 rounded-lg cursor-pointer'onClick={openContact}>Contact</h1>
        </div>
        <div className="cart w-6"onClick={openCart}><img src="/public/Icons/ic_cart.svg" alt="" /></div>

    </div>
    </>
  )
}

export default Header