import React from 'react'
import './Loading.css'
const Loading: React.FC = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading
