import React from 'react'

const Style: React.FC = () => {
  return (
    <section className='w-full h-auto p-5'>
      <div className='container bg-bgGray h-[870px] rounded-3xl py-20 px-20 flex flex-col gap-10 items-center max-lg:p-10 max-lg:justify-center max-lg:h-auto max-[450px]:p-5'>
        <h2 className='text-5xl font-extrabold text-center text-primary max-lg:text-3xl max-sm:text-xl'>
          BROWSE BY DRESS STYLE
        </h2>
        <div className='grid w-full'>
          <div className='h-72 item1 rounded-2xl'>
            <h3 className='text-4xl text-primary font-bold p-7 max-sm:text-2xl'>
              Casual
            </h3>
          </div>
          <div className='h-72 item2 rounded-2xl'>
            <h3 className='text-4xl text-primary font-bold p-7 max-sm:text-2xl'>
              Formal
            </h3>
          </div>
          <div className='h-72 item3 rounded-2xl'>
            <h3 className='text-4xl text-primary font-bold p-7 max-sm:text-2xl'>
              Party
            </h3>
          </div>
          <div className='h-72 item4 rounded-2xl'>
            <h3 className='text-4xl text-primary font-bold p-7 max-sm:text-2xl'>
              Gym
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Style
