import './App.css';
import foodsData from './data/foods'
import Menu from './components/Menu';



function App() {

  const foods = foodsData


  return (
    <div className="App">
      <Menu foods={ foods }/>
    </div>
  );
}

export default App;
