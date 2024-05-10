import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from '../src/Components/Home/Home'
import About from './Components/About/About';
import Order from './Components/Order/Order';
import SignUp from './Components/SignUp/SignUp';
import Card from './Components/card/Card'
import Product from './Components/Product/Product';
import ProductState from './Context/ProductState';
import ProductBuy from './Components/Product/ProductBuy';
import LogIn from './Components/Login/Login';
import PageNotFound from './Components/404 Not Found/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ProductState>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/LogIn' element={<LogIn/>} />
        <Route path='/card' element={<Card/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/ProductBuy' element={<ProductBuy/>}/>
        <Route path='/Oder' element={<Order/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </ProductState>
      </BrowserRouter>
    </div>
  );
}

export default App;
