import React from 'react'
import { Link } from 'react-router-dom'
import { GoChevronRight } from 'react-icons/go'
import { useQuery } from '@tanstack/react-query'
import { request } from '../../api'
import { Product } from '../../types'
const Detail: React.FC = () => {
  const query = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return request('').then(res => res)
    }
  })
  console.log(query?.data?.data)
  return (
    <section className='w-full h-auto p-5'>
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
        {query?.data?.data.map((item: Product, index: number) => (
          <div key={index} className='width flex justify-between gap-2'>
            <div className='flex items-center justify-center gap-5'>
              <div className='flex flex-col items-center justify-center gap-5'>
                <div className='w-44 h-48 border-2 rounded-xl flex items-center justify-center'>
                  <img className='w-full h-full' src='' alt='img' />
                </div>
                <div className='w-44 h-48 border-2 rounded-xl flex items-center justify-center'>
                  <img className='w-full h-full' src='' alt='img' />
                </div>
                <div className='w-44 h-48 border-2 rounded-xl flex items-center justify-center'>
                  <img className='w-full h-full' src='' alt='img' />
                </div>
              </div>
              <img
                className='w-[500px] h-[615px] rounded-2xl border-2'
                src=''
                alt='img'
              />
            </div>
            <div className='flex flex-col'>
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Detail
