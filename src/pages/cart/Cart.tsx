import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/api'
import { RootState } from '../../redux'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import type { Cart } from '../../types'
import toast, { Toaster } from 'react-hot-toast'
import Summary from '../../components/summary/Summary'
import empty from '../../assets/images/empty.png'
const Cart: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const [itemCounts, setItemCount] = useState<Record<number, number>>(() =>
    cart.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity || 1 }), {})
  )

  const handleRemoveCart = (id: number) => {
    dispatch(removeFromCart(id))
    toast.success('Mahsulot savatdan olib tashlandi ✅')
    setItemCount(prev => {
      const updated = { ...prev }
      delete updated[id]
      return updated
    })
  }

  const handleIncrement = (id: number) => {
    setItemCount(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }))
  }

  const handleDecrement = (id: number) => {
    setItemCount(prev => ({
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
    <div className='container flex justify-between max-xl:flex-col max-md:p-5'>
      <div className='w-full flex flex-col gap-10 h-[500px] overflow-y-auto cart'>
        {cart && cart.length > 0 ? (
          cart.map((item: Cart) => (
            <div key={item.id} className='flex flex-col'>
              <div className='flex justify-between gap-5 w-[800px] bg-bgGray p-5 rounded-xl mb-5 max-2xl:w-[80%] max-xl:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                <img
                  className='w-40 h-40 rounded-xl max-sm:w-60'
                  src={item.image[0]}
                  alt='img'
                />
                <div className='flex flex-col gap-2 max-sm:items-center'>
                  <h2 className='text-2xl text-black font-bold max-sm:text-center'>
                    {item.title}
                  </h2>
                  <strong>Count: {itemCounts[item.id]}</strong>
                  <p>
                    Size: <span className='text-gray-500'>Large</span>
                  </p>
                  <strong className='text-2xl text-black max-xl:text-xl'>
                    Price: {item.price * itemCounts[item.id]}
                  </strong>
                </div>
                <div className='flex flex-col items-end justify-between max-sm:items-center max-sm:gap-5'>
                  <button onClick={() => handleRemoveCart(item.id)}>
                    <FaTrash className='text-red-500 text-2xl' />
                  </button>
                  <div className='w-32 h-16 flex items-center justify-between py-2 px-5 bg-gray-300 rounded-full gap-2 max-xl:h-auto'>
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
          ))
        ) : (
          <div className='flex justify-center items-center flex-col h-full'>
            <img className='w-96' src={empty} alt='img' />
            <Link
              to={'/arrivals'}
              className='text-nowrap bg-gray-300 px-5 py-2 rounded-full text-black font-bold hover:opacity-70'
            >
              Go Products
            </Link>
          </div>
        )}
      </div>
      <Summary
        grandTotal={grandTotal}
        totalPrice={totalPrice}
        discount={discount}
        deliveryFee={deliveryFee}
      />
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  )
}

export default Cart
