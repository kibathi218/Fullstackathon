import './App.css';
import foodsData from './data/foods'
import Menu from './components/Menu';
import axios from 'axios'
import { useState, useEffect } from 'react'
const BASE_URL = 'http://localhost:3001/api'


function App() {

  useEffect(() => {
    async function getFoods() {
      const res = await axios.get(`${BASE_URL}/foods`)
      console.log(res.data)
    }
    getFoods()
  })

  const foods = foodsData


  return (
    <div className="App">
      <Menu foods={ foods }/>
    </div>
  );
}

export default App;
