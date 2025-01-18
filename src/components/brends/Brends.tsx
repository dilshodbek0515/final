import brend1 from '../../assets/images/brend1.png'
import brend2 from '../../assets/images/brend2.png'
import brend3 from '../../assets/images/brend3.png'
import brend4 from '../../assets/images/brend4.png'
import brend5 from '../../assets/images/brned5.png'
const Brends = () => {
  return (
    <section className='w-full h-auto bg-primary p-5'>
      <div className='container flex items-center justify-between gap-10 max-xl:flex-wrap max-[450px]:flex-col max-[450px]:gap-20 max-sm:p-10'>
        <img src={brend1} alt='img' className='w-44 h-auto' />
        <img src={brend2} alt='img' className='w-44 h-auto' />
        <img src={brend3} alt='img' className='w-44 h-auto' />
        <img src={brend4} alt='img' className='w-44 h-auto' />
        <img src={brend5} alt='img' className='w-44 h-auto' />
      </div>
    </section>
  )
}

export default Brends
