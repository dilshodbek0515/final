import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { request } from '../../api'
import { Products } from '../../types'

const Sale: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const naviagate = useNavigate()
  const query = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return request('').then(res => res)
    }
  })

  const star = (star: number) => {
    return Array.from({ length: star }, (_, index) => (
      <span key={index}>⭐</span>
    ))
  }
  return (
    <div className='w-full h-auto border-2 p-5 flex items-center flex-col gap-12 mt-20'>
      <h2 className='text-5xl text-black text-center font-extrabold max-md:text-2xl'>
        Top selling
      </h2>
      {query.data?.data && (
        <div className='container grid grid-cols-4 grid-rows-1 h-auto max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
          {query.data.data
            ?.slice(4, 8)
            .map((product: Products, index: number) => (
              <div key={index} className='h-[450px] flex flex-col gap-4'>
                <div className='w-full h-[70%] flex items-center justify-center bg-bgGray rounded-2xl'>
                  <img
                    onClick={() => naviagate(`/product/${product.id}`)}
                    className='w-[80%] h-[80%] cursor-pointer'
                    src={product.images[0]}
                    alt='img'
                  />
                </div>
                <h2 className='px-3 text-xl font-semibold capitalize max-md:text-lg'>
                  {product.title}
                </h2>
                <p className='px-3 flex items-center'>{star(product.star)}</p>
                <strong className='px-3 pb-3 font-bold text-2xl'>
                  ${product.price}
                </strong>
              </div>
            ))}
        </div>
      )}
      <Link
        to={'/arrivals'}
        className='w-80 h-14 bg-transparent flex justify-center items-center duration-300 rounded-full border-2 text-xl hover:bg-gray-500 hover:text-white hover:border-transparent max-md:w-52'
      >
        View All
      </Link>
    </div>
  )
}

export default Sale
