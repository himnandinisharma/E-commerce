import React from 'react'
import products from '../data/products.json'

function Products({ selectedCategory }) {

    const filteredProducts = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory)

    return (
        <div className=" w-5/6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {
                filteredProducts.map((product) => (
                    <a key={product.id} className="group">
                        <div className="flex flex-col justify-between items-stretch h-full px-4 pb-4 rounded-xl shadow-xl bg-gray-100 ">
                            <img src={product.image}
                                className="aspect-square w-full rounded-lg    group-hover:opacity-75 xl:aspect-[7/8] "
                            />
                            <h3 className="mt-4 text-lg text-black">{product.title}</h3>
                            <h3>{product.category}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">Price: {product.price}$</p>
                            <div className="flex gap-3 justify-between">
                                <button className='bg-black text-white rounded-xl px-4 py-2 w-1/2'>Buy now</button>
                                <button className='bg-blue-950 text-white rounded-xl px-4 py-2 w-1/2'>Add to Cart</button>
                            </div>
                        </div>
                    </a>
                ))}
        </div>
    )
}

export default Products