import React, { useState } from 'react'
import './menu.css'
import Checkout from './Checkout'

const Menu = (props) => {

  let total = 0

  const addToTotal = (price) => {
    total += price
    console.log(total);
  }

  const subFromTotal = (price) => {
    total -= price
    console.log(total)
  }

  return (
    <div>
      <h2>Menu</h2>
         <div>
        { props.foods.map((food) => (        
            <div key={food.id}>
              <img style={{width: '200px'}} src={ food.img } />
              <h2>{ food.name }</h2>
              <p>{ food.description }</p>
              <button onClick={() => addToTotal(food.price)} className='btn'>+</button>
              <p>${ food.price }</p>
              <button onClick={() => subFromTotal(food.price)} className='btn'>-</button>
        </div> ))}
        </div>

        <Checkout total={total} />
    </div>
  )
}

export default Menu