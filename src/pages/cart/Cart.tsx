import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/api'
import { RootState } from '../../redux'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Divider } from '@mui/material'
import { FaArrowRightLong } from 'react-icons/fa6'
import type { Cart } from '../../types'
import toast, { Toaster } from 'react-hot-toast'

const Cart: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const [itemCounts, setItemCounts] = useState<Record<number, number>>(() =>
    cart.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity || 1 }), {})
  )

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id))
    toast.success('Mahsulot savatdan olib tashlandi ✅')
    setItemCounts(prev => {
      const updated = { ...prev }
      delete updated[id]
      return updated
    })
  }

  const handleIncrement = (id: number) => {
    setItemCounts(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }))
  }

  const handleDecrement = (id: number) => {
    setItemCounts(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }))
  }

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (itemCounts[item.id] || item.quantity),
    0
  )
  const discount = totalPrice * 0.2
  const deliveryFee = 15
  const grandTotal = totalPrice - discount + deliveryFee

  return (
    <div className='container flex justify-between'>
      <div className='w-full h-auto flex flex-col gap-10'>
        {cart?.map((item: Cart) => (
          <div key={item.id} className='flex flex-col'>
            <div className='flex justify-between gap-5 w-[800px] bg-bgGray p-5 rounded-xl mb-5 max-2xl:w-full'>
              <img
                className='w-40 h-40 rounded-xl max-sm:w-24 max-sm:h-24'
                src={item.image[0]}
                alt='img'
              />
              <div className='flex flex-col gap-2'>
                <h2 className='text-2xl text-black font-bold max-sm:text-lg max-sm:w-full'>
                  {item.title}
                </h2>
                <strong>Count: {itemCounts[item.id]}</strong>
                <p>
                  Size: <span className='text-gray-500'>Large</span>
                </p>
                <strong className='text-2xl text-black'>
                  Price: {item.price * itemCounts[item.id]}
                </strong>
              </div>
              <div className='flex flex-col items-end justify-between'>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  <FaTrash className='text-red-500 text-2xl' />
                </button>
                <div className='w-32 h-16 flex items-center justify-between py-2 px-5 bg-gray-300 rounded-full gap-2'>
                  <button
                    onClick={() => handleDecrement(item.id)}
                    disabled={itemCounts[item.id] === 1}
                    className='text-xl text-black'
                  >
                    <FaMinus />
                  </button>
                  <p className='text-2xl'>{itemCounts[item.id]}</p>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className='text-xl text-black'
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-[600px] h-[500px] bg-bgGray rounded-xl flex flex-col p-5 gap-5 max-xl:w-full'>
        <h2 className='text-2xl text-primary font-bold'>Order Summary</h2>
        <div className='w-full h-auto flex justify-between items-center gap-2'>
          <p className='text-xl text-gray-500'>Subtotal</p>
          <span className='text-3xl text-black font-bold'>$ {totalPrice}</span>
        </div>
        <div className='w-full h-auto flex justify-between items-center gap-2'>
          <p className='text-xl text-gray-500'>Discount (-20%)</p>
          <span className='text-3xl text-red-500 font-bold'>
            $ {discount.toFixed(2)}
          </span>
        </div>
        <div className='w-full h-auto flex justify-between items-center gap-2'>
          <p className='text-xl text-gray-500'>Delivery Fee</p>
          <span className='text-3xl text-black font-bold'>$ {deliveryFee}</span>
        </div>
        <Divider className='mb-5' />
        <div className='w-full h-auto flex justify-between items-center gap-2'>
          <p className='text-xl text-gray-500'>Total</p>
          <span className='text-3xl text-black font-bold'>
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
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  )
}

export default Cart
