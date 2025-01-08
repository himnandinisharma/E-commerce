import React from 'react'
import Sidebar from '../components/Sidebar'
import Products from '../components/Products'
import { useState } from 'react';

function Shop() {

  const [selectedCategory, setSelectedCategory] = useState('all');
 
  return (
    <div className="bg-white">
      <div className="mx-auto w-full px-16 py-16">
        <div className="flex w-100">
          <div className="sidebar w-1/6">
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          </div>
          <Products selectedCategory={selectedCategory}/>
        </div>
      </div>
    </div>
  )
}

export default Shop