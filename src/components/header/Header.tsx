import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { LuShoppingCart } from 'react-icons/lu'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoMenu, IoSearch } from 'react-icons/io5'
import { Badge } from '@mui/material'
const Header = () => {
  return (
    <header className='w-full h-auto p-5'>
      <div className='container bg-white h-auto flex items-center justify-between gap-10 max-xl:gap-5'>
        <div className='flex items-center justify-center gap-2'>
          <IoMenu className='text-gray-600 text-2xl hidden max-lg:block' />
          <Link to={'/'}>
            <img className='max-w-40 max-sm:w-32' src={logo} alt='img' />
          </Link>
        </div>
        <nav>
          <ul className='flex gap-10 items-center justify-center max-xl:gap-5 max-lg:hidden'>
            <select className='border-transparent outline-none'>
              <option
                className='text-gray-600 text-lg text-nowrap'
                value='Shop'
              >
                Shop
              </option>
              <option
                className='text-gray-600 text-lg text-nowrap'
                value='Shop'
              >
                Shop
              </option>
              <option
                className='text-gray-600 text-lg text-nowrap'
                value='Shop'
              >
                Shop
              </option>
            </select>
            <li className='text-gray-600 font-medium text-lg text-nowrap border-transparent max-xl:text-[16px]'>
              <NavLink to={'/sale'}>On Sale</NavLink>
            </li>
            <li className='text-gray-600 font-medium text-lg text-nowrap border-transparent max-xl:text-[16px]'>
              <NavLink to={'/arrivals'}>New Arrivals</NavLink>
            </li>
            <li className='text-gray-600 font-medium text-lg text-nowrap border-transparent max-xl:text-[16px]'>
              <NavLink to={'/brend'}>Brands</NavLink>
            </li>
          </ul>
        </nav>
        <form className='w-full h-12 bg-[#F0F0F0] rounded-full flex items-center justify-between px-5 gap-3 max-md:hidden'>
          <button className='w-5'>
            <IoSearch className='text-gray-600 text-xl' />
          </button>
          <input
            className='flex-1 h-full rounded-full outline-none border-none text-xl indent-1 bg-[#F0F0F0]'
            required
            placeholder='Search for products...'
            type='text'
          />
        </form>
        <div className='flex items-center justify-center gap-5'>
          <Link to={'/search'}>
            <IoSearch className='text-gray-600 text-2xl hidden max-sm:block' />
          </Link>
          <Link to={'/cart'}>
            <Badge color='primary' badgeContent={0} showZero>
              <LuShoppingCart className='text-xl' />
            </Badge>
          </Link>
          <FaRegUserCircle className='text-gray-600 text-2xl' />
        </div>
      </div>
    </header>
  )
}

export default Header
