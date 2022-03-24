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
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg" alt="1" />
              <h2>HamBurger</h2>
              <p>1/4lb ground beef patty, lettuce, tomato, pickles, mustard, ketchup, between sesame seed buns.</p>
            </div> 
          ))
          }
          {
            <div>
              <img src="https://assets.myfoodandfamily.com/adaptivemedia/rendition/195370-3000x2000.jpg?id=093000b4880e99e6cd87fa511235a789145c5a0a&ht=650&wd=1004&version=1&clid=pim" alt="2" />
              <h2>CheeseBurger</h2>
              <p>1/4lb ground beef patty, american cheese, lettuce, tomato, pickles, mustard, ketchup, between sesame seed buns.</p>
            </div>
          }
          {
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png" alt="3" />
              <h2>Hot Dog</h2>
              <p>Beef and Pork hotdog, with ketchup and mustard, in a hotdog bun.</p>
            </div>
          }
        </div>
    </div>
  )
}

export default Menu