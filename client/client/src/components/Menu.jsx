import React, { useState } from 'react'
import './menu.css'
import Checkout from './Checkout'

const Menu = (props) => {

  let [total, setTotal] = useState(0)
 
  const addToTotal = (price) => {
    setTotal(total += price)
    console.log(total);
  }

  const subFromTotal = (price) => {
    if (total-price < 0) {
      console.log("error");
    } else
    setTotal(total -= price)
    console.log(total)
  }

  return (
    <div>
      {/* <header>
      <h2>Menu</h2>
      </header> */}
         <div>
        { props.foods.map((food) => (        
            <div key={food.id}>
              <img style={{width: '200px'}} src={ food.image } />
              <h2>{ food.name }</h2>
              <p>{ food.description }</p>
              <button onClick={() => addToTotal(food.price)} className='btn'>+</button>
              <h3>${ food.price }</h3>
              <button onClick={() => subFromTotal(food.price)} className='btn'>-</button>
            </div> ))}
        </div>

        <footer>
        <Checkout total={total} />
        </footer>
    </div>
  )
}

export default Menu
