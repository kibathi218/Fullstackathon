import './App.css';
// import foodsData from './data/foods'
import Menu from './components/Menu';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
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
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={ <Menu foods= { food } />} />
      </Routes>
      {/* <Menu
        key={ food.id } 
        foods={ food }
      /> */}
    </div>
  );
}

export default App;