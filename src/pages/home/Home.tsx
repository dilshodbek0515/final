import React from 'react'
import Brends from '../../components/brends/Brends'
import Customers from '../../components/customers/Customers'
import Hero from '../../components/hero/Hero'
import Product from '../../components/product/Product'
import Style from '../../components/style/Style'

const Home:React.FC = () => {
  return (
    <div>
      <Hero />
      <Brends />
      <Product />
      <Style />
      <Customers />
    </div>
  )
}

export default Home
