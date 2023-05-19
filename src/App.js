
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Registeration from './components/Registeration';
import Home from './components/Home';


function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path={'/'} element={<Registeration/>}></Route>
      <Route path={'/dashboard'} element={<Home/>}></Route>
      </Routes>
    </div>  
  );
}

export default App;
