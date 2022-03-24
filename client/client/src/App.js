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


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
