import React, { useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { GoChevronRight } from 'react-icons/go'
import { useGetShopDetailQuery } from '../../redux/api/productApi'
import { Product } from '../../types'
import { Divider } from '@mui/material'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Loading from '../../components/loading/Loading'

const Detail: React.FC = () => {
  const [count, setCount] = useState(0)
  const { id } = useParams()
  const { data } = useGetShopDetailQuery(id) as { data?: Product }
  console.log(data)

  const renderStars = (star: number) => {
    return Array.from({ length: star }, (_, index) => (
      <span key={index}>⭐</span>
    ))
  }
  return (
    <section className='w-full h-auto p-5'>
      {!data ? (
        <Loading />
      ) : (
        <div className='container flex flex-col gap-10'>
          <div className='flex items-center gap-2'>
            <Link to={'/'} className='text-lg'>
              Home
            </Link>
            <GoChevronRight className='text-xl' />
            <Link to={'/'} className='text-lg'>
              Shop
            </Link>
            <GoChevronRight className='text-xl' />
            <Link to={'/'} className='text-lg'>
              Men
            </Link>
            <GoChevronRight className='text-xl' />
            <Link to={'/'} className='text-lg'>
              T-shirts
            </Link>
          </div>

          <div className='width flex justify-between gap-5'>
            <div className='flex items-center justify-center gap-5'>
              <div className='flex flex-col items-center justify-center gap-5'>
                {data?.images?.slice(0, 3).map((img, index) => (
                  <div
                    key={index}
                    className='w-44 h-48 border-2 rounded-xl flex items-center justify-center'
                  >
                    <img
                      className='w-full h-full'
                      src={img}
                      alt={`img-${index}`}
                    />
                  </div>
                ))}
              </div>
              <img
                className='w-[500px] h-[615px] rounded-2xl border-2'
                src={data?.images?.[0]}
                alt='main'
              />
            </div>
            <div className='flex flex-col gap-5'>
              <h2 className='text-5xl text-primary font-extrabold'>
                {data?.title}
              </h2>
              <div className='flex items-center gap-5'>
                <p className='text-xl'>{renderStars(data?.star)}</p>
                <p className='text-xl'>{data?.star} / 5</p>
              </div>
              <strong className='text-4xl'>
                $ {data.price} <del className='text-gray-500'>$ 3000</del>
              </strong>
              <p className='text-xl text-gray-300 max-w-[700px] leading-8'>
                {data.description}
              </p>
              <Divider />
              <h4 className='text-lg text-gray-500'>Select colors</h4>
              <div className='flex items-center gap-5'>
                <div className='w-16 h-16 rounded-full bg-[#4F4631]'></div>
                <div className='w-16 h-16 rounded-full bg-[#314F4A]'></div>
                <div className='w-16 h-16 rounded-full bg-[#31344F]'></div>
              </div>
              <Divider />
              <h4 className='text-lg text-gray-500'>Choose Size</h4>
              <div className='flex items-center gap-5'>
                <NavLink
                  to={''}
                  className='py-3 px-10 rounded-full bg-bgGray capitalize border-transparent font-light text-gray-600 focus:bg-primary focus:text-white'
                >
                  {data.size[0]}
                </NavLink>
                <NavLink
                  to={''}
                  className='py-3 px-10 rounded-full bg-bgGray capitalize border-transparent font-light text-gray-600 focus:bg-primary focus:text-white'
                >
                  {data.size[1]}
                </NavLink>
                <NavLink
                  to={''}
                  className='py-3 px-10 rounded-full bg-bgGray capitalize border-transparent font-light text-gray-600 focus:bg-primary focus:text-white'
                >
                  {data.size[2]}
                </NavLink>
                <NavLink
                  to={''}
                  className='py-3 px-10 rounded-full bg-bgGray capitalize border-transparent font-light text-gray-600 focus:bg-primary focus:text-white'
                >
                  {data.size[3]}
                </NavLink>
              </div>
              <Divider />
              <div className='flex items-center gap-5'>
                <div className='w-60 h-16 flex items-center justify-between py-2 px-5 bg-bgGray rounded-full'>
                  <button
                    className='text-xl text-black '
                    onClick={() => setCount(p => p - 1)}
                  >
                    <FaMinus />
                  </button>
                  <p className='text-2xl'>{count}</p>
                  <button
                    className='text-xl text-black '
                    onClick={() => setCount(p => p + 1)}
                  >
                    <FaPlus />
                  </button>
                </div>
                <button className='w-96 h-16 bg-primary text-center rounded-full border-2 border-primary duration-300 text-white text-xl hover:bg-transparent hover:text-black'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Detail
