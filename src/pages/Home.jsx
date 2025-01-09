import React from 'react'
import categories from '../data/categories.json'
import { useNavigate } from 'react-router-dom'

function Home() {
  
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate("/shop", { state: category.id })
  }

  return (
    <div>
      <div className='Hero flex flex-col h-3/4 bg-gradient-to-r from-sky-200 via-orange-200 to-pink-200'>
        <div className="flex h-[45vh] w-full justify-center items-center">
          <h1 className='text-6xl text-center'>Unveil Your Inner  <br />Sophistication</h1>
        </div>
        <div className="flex gap-8 p-8 justify-between">
          {categories.map((category) => (
            <div onClick={() => handleCategoryClick(category)} className="flex flex-col justify-center items-center gap-y-2 rounded-xl">
              <img className='rounded-xl' src={category.images} width="200px" height="130px" />
              <h1 className='text-2xl'>{category.title}</h1>
            </div>
          ))}
        </div>
        <div className="flex h-1/4"></div>
      </div>
      <div className="flex w-full justify-center items-center py-10">
        <img className='rounded-xl' src="/public/categories_images/sale.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home