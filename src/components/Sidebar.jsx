import React from 'react'

function Sidebar({ selectedCategory, setSelectedCategory }) {

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    return (
        <div>
            <h1 className='text-2xl  border-b-black border-b py-2'>Categories</h1>
            <div className='flex flex-col py-4 gap-y-2'>
                <div className='flex'>
                    <input checked={selectedCategory === 'all'} onChange={handleCategoryChange} type="radio" id="all" name="category" value="all" />
                    <label className='px-2' htmlFor="all">All</label>
                </div>
                <div className='flex'>
                    <input checked={selectedCategory === 'clothing'} onChange={handleCategoryChange} type="radio" id="clothing" name="category" value="clothing" />
                    <label className='px-2' htmlFor="clothing">Clothing</label>
                </div>
                <div className='flex'>
                    <input checked={selectedCategory === 'watches'} onChange={handleCategoryChange} type="radio" id="watches" name="category" value="watches" />
                    <label className='px-2' htmlFor="watches">Watches</label>
                </div>
                <div className='flex'>
                    <input checked={selectedCategory === 'bags'} onChange={handleCategoryChange} type="radio" id="bags" name="category" value="bags" />
                    <label className='px-2' htmlFor="bags">Bags</label>
                </div>
                <div className='flex'>
                    <input checked={selectedCategory === 'makeup'} onChange={handleCategoryChange} type="radio" id="makeup" name="category" value="makeup" />
                    <label className='px-2' htmlFor="makeup">Makeup</label>
                </div>
                <div className='flex'>
                    <input checked={selectedCategory === 'home-appliances'} onChange={handleCategoryChange} type="radio" id="home_appliances" name="category" value="home-appliances" />
                    <label className='px-2' htmlFor="home_appliances">Home Appliances</label>
                </div>
                <div className='flex'>
                    <input checked={selectedCategory === 'footwear'} onChange={handleCategoryChange} type="radio" id="footwear" name="category" value="footwear" />
                    <label className='px-2' htmlFor="footwear">Footwear</label>
                </div>
            </div>
        </div>
    )
}

export default Sidebar