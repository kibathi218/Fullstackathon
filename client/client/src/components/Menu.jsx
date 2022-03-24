import React, { useState } from 'react'
import './menu.css'
import Checkout from './Checkout'

const Menu = (props) => {

  // let total = 0

  // const calcTotal = (food) => {
  //   total += {food.price}
  // }

  // const [total, setTotal] = useState(0)

  // const addToTotal = (parseInt(food.price)); 



  return (
    <div>
      <h2>Menu</h2>
         <div>
        {
          props.foods.map((food) => {
           
            <div>
               
              

              <img src={ food.img } />
              <h2>{ food.name }</h2>
              <p>{ food.description }</p>
              <button onClick={() => addToTotal(parseInt(food.price))} className='btn'>+</button>
              <p>${ food.price }</p>
              <button className='btn'>-</button>
            </div>
          })
        }
        </div>
    </div>
  )
}

export default Menu