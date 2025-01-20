import { useEffect } from "react"

const Cart:React.FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <div>Cart</div>
  )
}

export default Cart