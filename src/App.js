
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import FavList from './components/FavList'
import {Route,Routes} from 'react-router-dom'
import  NavBar  from './components/NavBar';


function App() {
  return (

    <div className="App">
     
      <NavBar />
        <Routes>
                <Route path='/' element={ <Home/>}></Route>
                <Route path='/FavList' element={ <FavList/>}></Route>
                
            </Routes>
      
     
    </div>
  );
}

export default App;
