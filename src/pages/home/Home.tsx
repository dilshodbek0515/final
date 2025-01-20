import React, { useEffect } from 'react'
import Brends from '../../components/brends/Brends'
import Hero from '../../components/hero/Hero'
import Product from '../../components/product/Product'
import Style from '../../components/style/Style'

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Hero />
      <Brends />
      <Product />
      <Style />
    </div>
  )
}

export default Home
