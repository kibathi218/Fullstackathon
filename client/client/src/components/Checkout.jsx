import React from 'react'
import './menu.css'

const Checkout = (props) => {

 
  return (
    <div className='footer'>
        <h2>Total: { props.total }</h2>
    </div>
  )
}

export default Checkout