import { Divider } from '@mui/material'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { SummaryProps } from '../../types'

const Summary = ({
  grandTotal,
  totalPrice,
  discount,
  deliveryFee
}: SummaryProps) => {
  return (
    <div className='w-[600px] h-[500px] bg-bgGray rounded-xl flex flex-col p-5 gap-5 max-xl:w-full'>
      <h2 className='text-2xl text-primary font-bold'>Order Summary</h2>
      <div className='w-full h-auto flex justify-between items-center gap-2'>
        <p className='text-xl text-gray-500 max-sm:text-lg'>Subtotal</p>
        <span className='text-3xl text-black font-bold max-sm:text-lg'>
          $ {totalPrice}
        </span>
      </div>
      <div className='w-full h-auto flex justify-between items-center gap-2'>
        <p className='text-xl text-gray-500 max-sm:text-lg'>Discount (-20%)</p>
        <span className='text-3xl text-red-500 font-bold max-sm:text-lg'>
          $ {discount.toFixed(2)}
        </span>
      </div>
      <div className='w-full h-auto flex justify-between items-center gap-2'>
        <p className='text-xl text-gray-500 max-sm:text-lg'>Delivery Fee</p>
        <span className='text-3xl text-black font-bold max-sm:text-lg'>
          $ {deliveryFee}
        </span>
      </div>
      <Divider className='mb-5' />
      <div className='w-full h-auto flex justify-between items-center gap-2'>
        <p className='text-xl text-gray-500 max-sm:text-lg'>Total</p>
        <span className='text-3xl text-black font-bold max-sm:text-lg'>
          $ {grandTotal.toFixed(2)}
        </span>
      </div>
      <div className='w-full h-auto flex justify-between items-center gap-2 max-sm:flex-col'>
        <input
          className='w-96 h-12 text-xl bg-gray-300 rounded-full outline-none px-5 max-sm:w-full'
          type='text'
          placeholder='Add promo code'
        />
        <button className='text-xl text-white font-bold px-10 py-3 bg-black rounded-full hover:opacity-70'>
          Apply
        </button>
      </div>
      <Link
        to={'/checkOut'}
        className='w-full text-xl flex items-center justify-center gap-5 text-nowrap text-white font-bold px-10 py-3 bg-black rounded-full hover:opacity-70'
      >
        Go to Checkout <FaArrowRightLong />
      </Link>
    </div>
  )
}

export default Summary
