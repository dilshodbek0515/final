import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='container flex flex-col items-center justify-center gap-5'>
        <img
          className='w-[50%] h-auto max-xl:w-[80%] max-md:[50%] max-sm:w-full'
          src='https://cdn.acowebs.com/wp-content/uploads/2023/10/3acwebs-1.jpg'
          alt='not found img'
        />
        <Link
          className='flex justify-center items-center w-96 h-20 rounded-full bg-gray-300 text-2xl duration-300 hover:bg-gray-500 hover:text-white max-lg:w-auto max-lg:px-20 max-sm:h-12'
          to={'/'}
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default Error
