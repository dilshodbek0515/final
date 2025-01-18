import { IoSearch } from 'react-icons/io5'

const Search = () => {
  return (
    <div className='w-full h-auto p-5 py-20 flex items-center flex-col gap-10'>
      <form className='container h-20 flex items-center border-2 px-5 rounded-full max-sm:h-16'>
        <input
          type='search'
          placeholder='Search for Products...'
          required
          className='flex-1 h-full outline-none rounded-full indent-1 text-xl text-gray-500 max-sm:text-sm'
        />
        <button className='bg-transparent flex items-center justify-center'>
          <IoSearch className='text-3xl max-sm:text-xl' />
        </button>
      </form>

      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8D1GaoK-mxK4sUNQZAOtMocNL0Fx7MBWtgw&s'
        alt='img'
      />
    </div>
  )
}

export default Search
