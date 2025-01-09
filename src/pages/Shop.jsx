import React from 'react'
import Sidebar from '../components/Sidebar'
import Products from '../components/Products'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Shop() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const cat = location.state
    cat ? setSelectedCategory(cat) : null
  }, [location.state])

  return (
    <div className="bg-white">
      <div className="mx-auto w-full px-16 py-16">
        <div className="flex w-100">
          <div className="sidebar w-1/6">
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          </div>
          <Products selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  )
}

export default Shop