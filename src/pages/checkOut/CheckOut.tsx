import { useSelector } from 'react-redux'
import Summary from '../../components/summary/Summary'
import { RootState } from '../../redux'
import { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const CheckOut = () => {
  const cart = useSelector((state: RootState) => state.cart)
  const [itemCounts] = useState<Record<number, number>>(() =>
    cart.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity || 1 }), {})
  )
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (itemCounts[item.id] || item.quantity),
    0
  )
  const discount = totalPrice * 0.2
  const deliveryFee = 15
  const grandTotal = totalPrice - discount + deliveryFee

  // bot
  const [bot, setBot] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  })
  const BOT_TOKEN = '7663778517:AAHLTijMCfFznDWG_1RuAK8YxoRBhYsWPe4'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBot({ ...bot, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const message = `
      New Order:
       First Name: ${bot.firstName}
       Last Name: ${bot.lastName}
       Phone: ${bot.phone}
       Email: ${bot.email}

      Summary:
       Total Price: $${totalPrice.toFixed(2)}
       Discount: $${discount.toFixed(2)}
       Delivery Fee: $${deliveryFee.toFixed(2)}
       Grand Total: $${grandTotal.toFixed(2)}
    `
    try {
      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/SendMessage`, {
        chat_id: '6891591255',
        text: message
      })
      toast.success('Malumotlar telegram botga yborildi'),
        setBot({
          firstName: '',
          lastName: '',
          phone: '',
          email: ''
        })
    } catch (error) {
      toast.error('Malumotlar telegram botga yborilmadi')
    }
  }
  return (
    <section className='w-full h-auto p-5'>
      <div className='container flex items-center justify-center flex-col gap-20'>
        <h2 className='text-5xl text-black font-bold'>Check Out</h2>
        <div className='w-full flex justify-between gap-2 max-md:flex-col'>
          <form
            className='w-[50%] flex flex-col max-md:w-full'
            onSubmit={handleSubmit}
          >
            <div className='w-full p-10 border-2 rounded-2xl flex flex-col gap-5 max-sm:p-2'>
              <h3 className='text-2xl text-primary font-bold'>
                Contact Infomation
              </h3>
              <div className='w-full flex justify-between max-2xl:flex-col'>
                <div className='w-auto flex flex-col gap-5'>
                  <h5 className='uppercase text-lg text-primary font-lg'>
                    First Name
                  </h5>
                  <input
                    className='outline-none border border-black w-80 h-10 rounded-md px-2 max-2xl:w-full'
                    type='text'
                    placeholder='First name'
                    required
                    name='firstName'
                    value={bot.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className='w-auto flex flex-col gap-5'>
                  <h5 className='uppercase text-lg text-primary font-lg'>
                    Last Name
                  </h5>
                  <input
                    className='outline-none border border-black w-80 h-10 rounded-md px-2 max-2xl:w-full'
                    type='text'
                    placeholder='Last name'
                    required
                    name='lastName'
                    value={bot.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col gap-5'>
                <h5 className='uppercase text-lg text-primary font-lg'>
                  Phone number
                </h5>
                <input
                  className='outline-none border border-black w-full h-10 rounded-md px-2'
                  type='number'
                  placeholder='Phone number'
                  required
                  name='phone'
                  value={bot.phone}
                  onChange={handleChange}
                />
              </div>
              <div className='w-full flex flex-col gap-5'>
                <h5 className='uppercase text-lg text-primary font-lg'>
                  Your Email
                </h5>
                <input
                  className='outline-none border border-black w-full h-10 rounded-md px-2'
                  type='email'
                  placeholder='Email address'
                  required
                  name='email'
                  value={bot.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className='w-full h-14 bg-primary mt-5 rounded-xl text-white text-xl hover:opacity-75 mb-20'>
              Place Order
            </button>
          </form>
          <div className='w-[40%] max-md:w-full'>
            <Summary
              grandTotal={grandTotal}
              totalPrice={totalPrice}
              discount={discount}
              deliveryFee={deliveryFee}
            />
          </div>
        </div>
      </div>
      <Toaster position='top-center' reverseOrder={false} />
    </section>
  )
}

export default CheckOut
