import './App.css';
import foodsData from './data/foods'
import Menu from './components/Menu';
import { useState } from 'react';
import Checkout from './components/Checkout';


function App() {

  const foods = foodsData

  // const [total, setTotal] = useState(0)

  // const addToTotal = () => {

  //   total += {food.price}

  // }

  return (
    <div className="App">
      <Menu foods={ foods }/>
      <Checkout total={ total } />
    </div>
  );
}

export default App;
