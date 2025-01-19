import React from 'react'

const Hero: React.FC = () => {
  return (
    <main className='w-full h-auto px-5'>
      <div className='container h-[665px] hero p-20 max-md:p-10 max-sm:h-auto max-[450px]:p-5'>
        <div className='flex flex-col gap-5'>
          <h2 className='w-[577px] h-auto text-black font-extrabold text-6xl max-md:text-4xl max-md:w-auto max-[450px]:text-2xl'>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className='w-[570px] h-auto text-black text-lg max-md:w-auto max-[450px]:text-sm'>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className='w-52 h-14 rounded-full bg-primary duration-300 text-white hover:opacity-55 max-md:w-full'>
            Shop Now
          </button>
          <div className='w-auto flex items-center  gap-10 mt-20 max-md:flex-wrap max-md:justify-center'>
            <div className='flex flex-col max-sm:items-center'>
              <p className='font-bold text-4xl'>200+</p>
              <span className='text-gray-600 text-xl'>
                International Brands
              </span>
            </div>
            <div className='flex flex-col max-sm:items-center'>
              <p className='font-bold text-4xl'>2,000+</p>
              <span className='text-gray-600 text-xl'>
                High-Quality Products
              </span>
            </div>
            <div className='flex flex-col max-sm:items-center'>
              <p className='font-bold text-4xl'>30,000+</p>
              <span className='text-gray-600 text-xl'>Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
