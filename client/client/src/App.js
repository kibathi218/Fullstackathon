import './App.css';
// import foodsData from './data/foods'
import Menu from './components/Menu';
import axios from 'axios'
import { useState, useEffect } from 'react'
const BASE_URL = 'http://localhost:3001/api'


function App() {
  const [food, setFoods] = useState([])

  useEffect(() => {
    async function getFoods() {
      const res = await axios.get(`${BASE_URL}/foods`)
      setFoods(res.data.foods)
      console.log(res.data.foods)
    }
    getFoods()
  }, [])


  // const foods = foodsData


  return (
    <div className="App">
      <Menu
        key={ food.id } 
        foods={ food }
      />
    </div>
  );
}

export default App;