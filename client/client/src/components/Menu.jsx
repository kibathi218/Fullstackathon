import React from 'react'
import './menu.css'

const Menu = (props) => {
  return (
    <div>
      <header>Menu</header>
         <div>
        {
          props.foods.map((food) => (
            <div>
              <img src={ food.img } />
              <h2>{ food.name }</h2>
              <p>{ food.description }</p>
              
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Menu