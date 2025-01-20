import React, { useEffect } from 'react'
import Style from '../../components/style/Style'

const Brend: React.FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <div>
      <Style />
    </div>
  )
}

export default Brend
