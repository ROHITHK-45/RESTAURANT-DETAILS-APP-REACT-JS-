import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import RestaurantDetails from './components/RestaurantDetails';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Front from './Front'
// import store from './store';

function App() {
  return (
    <Router>
     <Header/>
        <Routes>
            <Route path='/' element={<Front/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/restaurants/:id' element={<RestaurantDetails/>}/> 
        </Routes>
     <Footer/>
     
    </Router>
  );
}

export default App;
