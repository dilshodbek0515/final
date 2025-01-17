import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter
} from 'react-icons/io5'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'
import card4 from '../../assets/images/card4.png'
import card5 from '../../assets/images/card5.png'
import { HiOutlineMail } from 'react-icons/hi'
const Footer = () => {
  return (
    <footer className='w-full h-auto bg-bgGray p-5 mt-32 max-md:mt-52'>
      <div className='container h-auto flex flex-col items-center gap-12 relative'>
        <div className='w-full h-auto rounded-2xl bg-black absolute -top-32 flex items-center justify-between gap-5 py-10 px-20 max-md:flex-col max-md:p-5 max-md:-top-48 max-sm:items-center max-sm:justify-center'>
          <h3 className='text-5xl w-[45%] text-white font-bold max-xl:text-3xl max-md:w-full max-md:text-center'>
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h3>
          <form className='flex flex-col gap-5'>
            <div className='w-[450px] h-[60px] px-5 text-lg bg-white rounded-full flex items-center gap-3 max-lg:w-full max-md:h-10 max-sm:w-[90%]'>
              <HiOutlineMail className='text-2xl' />
              <input
                type='text'
                required
                placeholder='Enter your email address'
                className='text-lg'
              />
            </div>
            <button className='w-[450px] h-[60px] px-5 text-lg bg-white rounded-full duration-300 hover:bg-transparent hover:text-white hover:border-white hover:border-2 max-lg:w-full max-md:h-10 max-sm:w-[90%]'>
              Subscribe to Newsletter
            </button>
          </form>
        </div>

        <div className='w-full h-auto flex justify-between gap-10 mt-32 max-lg:flex-wrap'>
          <div className='flex flex-col gap-6'>
            <Link to={'/'}>
              <img src={logo} alt='logo' />
            </Link>
            <p className='w-[292px]'>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className='flex items-center gap-3'>
              <div className='w-7 h-7 rounded-full bg-[#FFFFFF] text-lg flex items-center justify-center'>
                <IoLogoTwitter />
              </div>
              <div className='w-7 h-7 rounded-full bg-[#FFFFFF] text-lg flex items-center justify-center'>
                <IoLogoFacebook />
              </div>
              <div className='w-7 h-7 rounded-full bg-[#FFFFFF] text-lg flex items-center justify-center'>
                <IoLogoInstagram />
              </div>
              <div className='w-7 h-7 rounded-full bg-[#FFFFFF] text-lg flex items-center justify-center'>
                <IoLogoGithub />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className='text-xl font-bold'>COMPANY</h3>
            <p className='text-lg text-gray-600'>About</p>
            <p className='text-lg text-gray-600'>Features</p>
            <p className='text-lg text-gray-600'>Works</p>
            <p className='text-lg text-gray-600'>Career</p>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className='text-xl font-bold'>HELP</h3>
            <p className='text-lg text-gray-600'>Customer Support</p>
            <p className='text-lg text-gray-600'>Delivery Details</p>
            <p className='text-lg text-gray-600'>Terms & Conditions</p>
            <p className='text-lg text-gray-600'>Privacy Policy</p>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className='text-xl font-bold'>FAQ</h3>
            <p className='text-lg text-gray-600'>Account</p>
            <p className='text-lg text-gray-600'>Manage Deliveries</p>
            <p className='text-lg text-gray-600'>Orders</p>
            <p className='text-lg text-gray-600'>Payments</p>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className='text-xl font-bold'>RESOURCES</h3>
            <p className='text-lg text-gray-600'>Free eBooks</p>
            <p className='text-lg text-gray-600'>Development Tutorial</p>
            <p className='text-lg text-gray-600'>How to - Blog</p>
            <p className='text-lg text-gray-600'>Youtube Playlist</p>
          </div>
        </div>

        <hr className='w-full' />

        <div className='w-full h-auto flex items-center justify-between gap-5 max-md:flex-col'>
          <p className='text-xl text-gray-600 max-md:text-sm'>
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className='flex items-center gap-3'>
            <div className='w-12 h-8 bg-[#FFFFFF] rounded-md flex items-center justify-center'>
              <img src={card1} alt='img' />
            </div>
            <div className='w-12 h-8 bg-[#FFFFFF] rounded-md flex items-center justify-center'>
              <img src={card2} alt='img' />
            </div>
            <div className='w-12 h-8 bg-[#FFFFFF] rounded-md flex items-center justify-center'>
              <img src={card3} alt='img' />
            </div>
            <div className='w-12 h-8 bg-[#FFFFFF] rounded-md flex items-center justify-center'>
              <img src={card4} alt='img' />
            </div>
            <div className='w-12 h-8 bg-[#FFFFFF] rounded-md flex items-center justify-center'>
              <img src={card5} alt='img' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
