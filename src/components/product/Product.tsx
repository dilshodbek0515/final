import { useQuery } from '@tanstack/react-query'
import { request } from '../../api'
import React from 'react'
import type { Product } from '../../types'
const Product: React.FC = () => {
  const query = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return request('').then(res => res)
    }
  })

  const renderStars = (star: number) => {
    return Array.from({ length: star }, (_, index) => (
      <span key={index}>⭐</span>
    ))
  }
  console.log(query.data?.data)

  return (
    <div className='w-full h-auto p-5 flex items-center flex-col gap-12 mt-20'>
      <h2 className='text-5xl text-black text-center font-extrabold'>
        NEW ARRIVALS
      </h2>
      {query.data?.data && (
        <div className='container grid grid-cols-4'>
          {query.data.data.map((product: Product, index: number) => (
            <div key={index} className='h-[450px] flex flex-col gap-4'>
              <div className='w-full h-[70%] flex items-center justify-center bg-bgGray rounded-2xl'>
                <img
                  className='w-[80%] h-[80%]'
                  src={product.images}
                  alt='img'
                />
              </div>
              <h2 className='px-3 text-xl font-semibold capitalize'>
                {product.title}
              </h2>
              <p className='px-3 flex items-center'>
                {renderStars(product.star)}
              </p>
              <strong className='px-3 pb-3 font-bold text-2xl'>
                ${product.price}
              </strong>
            </div>
          ))}
        </div>
      )}
      <button className='w-80 h-14 bg-transparent duration-300 rounded-full border-2 text-xl hover:bg-gray-500 hover:text-white hover:border-transparent'>
        View All
      </button>
    </div>
  )
}

export default Product
