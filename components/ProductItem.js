import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function productItem({product, addToCartHandler}) {
  return (
    <div className='card z-30 mt-5'>
        {/* md:-mt-28 */}
        <Link legacyBehavior href={`/product/${product.slug}`}>
            <a>
                <Image
                    width="1000"
                    height="50"
                    src={product.image}
                    alt={product.name}
                    className="rounded shadow object-cover h-64 w-full"
                />
            </a>
        </Link>
        <div className='flex flex-col relative group p-5 items-center justify-center'>
            <div className='absolute  bottom-52 shadow-sm rounded shadow-gray-200 bg-gray-300 transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-80 
                                group-hover:translate-y-0'>
                <p>{product.description}</p>
            </div>
            <Link legacyBehavior href={`/product/${product.slug}`}>
                <a>
                    <h2 className='text-lg'>{product.name}</h2>
                </a>
            </Link>
            <p className='mb-2'>{product.brand}</p>
            <p>₹ {product.price}</p>
            <button className='primary-button' type='button' onClick={() => addToCartHandler(product)}>Add to cart</button>
            
        </div>
    </div>
  )
}
