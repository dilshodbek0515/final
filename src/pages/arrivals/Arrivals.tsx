import React, { useEffect } from 'react'
import Product from '../../components/product/Product'

const Arrivals: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Product />
    </div>
  )
}

export default Arrivals
