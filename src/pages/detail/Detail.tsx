import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import { GoChevronRight } from 'react-icons/go'
import {
  useGetCardByIdQuery,
  useGetShopDetailQuery
} from '../../redux/api/productApi'
import { Products } from '../../types'
import { Divider } from '@mui/material'
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import Loading from '../../components/loading/Loading'
import Customers from '../../components/customers/Customers'
import { useQuery } from '@tanstack/react-query'
import { request } from '../../api'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/api'
import toast, { Toaster } from 'react-hot-toast'

const Detail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams()
  const { data } = useGetShopDetailQuery(id) as { data?: Products }
  const [payment, setPrice] = useState<number>(data?.price || 120)
  const [count, setCount] = useState(1)

  const renderStars = (star: number) => {
    return Array.from({ length: star }, (_, index) => (
      <span key={index}>
        <FaStar className='text-yellow-400' />
      </span>
    ))
  }

  const increment = () => {
    setCount(p => p + 1)
    setPrice(prevPrice => prevPrice + (data?.price || 0))
  }

  const decrement = () => {
    setCount(p => p - 1)
    setPrice(prevPrice => prevPrice - (data?.price || 0))
  }

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

  const { data: product } = useGetCardByIdQuery(id) as { data: Products }
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          amount: payment,
          quantity: count,
          image: [product.images]
        }),
        toast.success(`Mahsulot savatga qo'shildi ✅`)
      )
    }
  }

  return (
    <section className='flex flex-col gap-24 p-5'>
      <div className='w-full h-auto p-5'>
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

            <div className='w-full flex justify-between gap-5 max-[1150px]:flex-col'>
              <div className='w-full flex items-center justify-center gap-5 max-2xl:flex-col'>
                <div className='flex flex-col items-center justify-center gap-5 max-2xl:flex-row max-md:flex-wrap'>
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
                  className='max-w-[500px] h-[615px] rounded-2xl border-2 max-md:w-96 max-md:h-96 max-sm:w-72 max-sm:h-72'
                  src={data?.images?.[0]}
                  alt='main'
                />
              </div>
              <div className='flex flex-col gap-5'>
                <h2 className='text-5xl text-primary font-extrabold max-xl:text-3xl'>
                  {data?.title}
                </h2>
                <div className='flex items-center gap-5'>
                  <p className='text-xl flex items-center gap-2'>
                    {renderStars(data?.star)}
                  </p>
                  <p className='text-xl'>{data?.star} / 5</p>
                </div>
                <strong className='text-4xl'>$ {payment.toFixed(2)}</strong>
                <p className='text-xl text-gray-300 max-w-[700px] leading-8 max-xl:w-96 max-sm:text-sm max-sm:w-auto'>
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
                <div className='flex items-center gap-5 max-xl:flex-wrap'>
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
                  <div className='w-60 h-16 flex items-center justify-between py-2 px-5 bg-bgGray rounded-full gap-2'>
                    <button
                      disabled={count === 1}
                      className='text-xl text-black'
                      onClick={decrement}
                    >
                      <FaMinus />
                    </button>
                    <p className='text-2xl'>{count}</p>
                    <button className='text-xl text-black ' onClick={increment}>
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className='w-96 h-16 bg-primary text-center rounded-full text-nowrap
                   border-2 border-primary duration-300 text-white text-xl hover:bg-transparent hover:text-black max-xl:w-auto max-xl:px-10'
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Customers />
      <div className='w-full h-auto border-2 p-5 flex items-center flex-col gap-12 mt-20'>
        <h2 className='text-5xl text-black text-center font-extrabold max-md:text-2xl'>
          NEW ARRIVALS
        </h2>
        {query.data?.data && (
          <div className='container grid grid-cols-4 grid-rows-1 h-auto max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
            {query.data.data
              ?.slice(2, 6)
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
          className='w-80 h-14 bg-transparent flex justify-center items-center duration-300
           rounded-full border-2 text-xl hover:bg-gray-500 hover:text-white hover:border-transparent max-md:w-52'
        >
          View All
        </Link>
      </div>
      <Toaster position='top-center' reverseOrder={false} />
    </section>
  )
}

export default Detail
