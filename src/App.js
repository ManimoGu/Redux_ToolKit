
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Home';
import Card from './Card';

const App = () => {




  return (
    
    <div className="App">
  
    
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path= "/Cards" element= {<Card/>}/>
    </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
