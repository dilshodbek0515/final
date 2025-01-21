import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/api'
import { RootState } from '../../redux'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { useGetCardByIdQuery } from '../../redux/api/productApi'
import { Link, useParams } from 'react-router-dom'
import type { Cart } from '../../types'
import { Divider } from '@mui/material'
import { FaArrowRightLong } from 'react-icons/fa6'
const Cart: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams()
  const { data } = useGetCardByIdQuery(id) as { data?: Cart }
  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState<number>(data?.price || 0)

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id))
  }
  const increment = () => {
    setCount(p => p + 1)
    setPrice(prevPrice => prevPrice + (data?.price || 0))
  }
  const decrement = () => {
    setCount(p => p - 1)
    setPrice(prevPrice => prevPrice - (data?.price || 0))
  }
  return (
    <div>
      {cart?.map(item => (
        <div key={item.id} className='container flex justify-between'>
          <div className='flex flex-col'>
            <div className='flex justify-between gap-5 w-[800px] bg-bgGray p-5 rounded-xl mb-5'>
              <img
                className='w-40 h-40 rounded-xl'
                src={item.image[0]}
                alt='img'
              />
              <div className='flex flex-col gap-2'>
                <h2 className='text-2xl text-black font-bold'>{item.title}</h2>
                <p>
                  Size: <span className='text-gray-500'>Large</span>
                </p>
                <p>
                  Color: <span className='text-gray-500'>white</span>
                </p>
                <strong className='text-2xl text-black'>$ {item.price}</strong>
              </div>
              <div className='flex flex-col items-end justify-between'>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  <FaTrash className='text-red-500 text-2xl' />
                </button>
                <div className='w-44 h-14 flex items-center justify-between py-2 px-5 bg-gray-300 rounded-full gap-2'>
                  <button
                    disabled={count === 0}
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
              </div>
            </div>
          </div>
          <div className='w-[600px] h-auto bg-bgGray rounded-xl flex flex-col p-5 gap-5'>
            <h2 className='text-2xl text-primary font-bold'>Order Summary</h2>
            <div className='w-full h-auto flex justify-between items-center gap-2'>
              <p className='text-xl text-gray-500'>Subtotal</p>
              <span className='text-3xl text-black font-bold'>
                $ {item.price}
              </span>
            </div>
            <div className='w-full h-auto flex justify-between items-center gap-2'>
              <p className='text-xl text-gray-500'>Discount (-20%)</p>
              <span className='text-3xl text-red-500 font-bold'>
                $ {item.price - 20}
              </span>
            </div>
            <div className='w-full h-auto flex justify-between items-center gap-2'>
              <p className='text-xl text-gray-500'>Delivery Fee</p>
              <span className='text-3xl text-black font-bold'>$ 15</span>
            </div>
            <Divider className='mb-5' />
            <div className='w-full h-auto flex justify-between items-center gap-2'>
              <p className='text-xl text-gray-500'>Total</p>
              <span className='text-3xl text-black font-bold'>
                $ {(item.price, item.price + length)}
              </span>
            </div>
            <div className='w-full h-auto flex justify-between items-center gap-2'>
              <input
                className='w-96 h-12 text-xl bg-gray-300 rounded-full outline-none px-5'
                type='text'
                placeholder='Add promo code'
              />
              <button className='text-xl text-white font-bold px-10 py-3 bg-black rounded-full hover:opacity-70'>
                Apply
              </button>
            </div>
            <Link
              to={'/checkOut'}
              className='w-full text-xl flex items-center justify-center gap-5 text-white font-bold px-10 py-3 bg-black rounded-full hover:opacity-70'
            >
              Go to Checkout <FaArrowRightLong />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart
