import './App.css';
import Header from './Components/Header';
import ScreenFooter from './Components/Footer/ScreenFooter';
import SummerSale from './pages/Collection/SummerSale';
import Contact from './pages/Contact';
import WholeSale from './pages/WholeSale';
import ProductDetail from './pages/ProductDetail';
import AffiliateProgram from './pages/AffiliateProgram/index';
import CustomerReviews from './pages/CustomerReviews';
import Bags from './pages/Collection/Bags';
import NewArrivals from './pages/Collection/NewArrivals';
import { Route, Routes } from "react-router-dom";
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App"> 
      <Header />
      <Routes>
        <Route path="/" element={<SummerSale />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/wholeSale" element={<WholeSale />}></Route>
        <Route path="/affiliateProgramme" element={<AffiliateProgram />}></Route>
        <Route path="/customerReviews" element={<CustomerReviews />}></Route>
        <Route path="/bags" element={<Bags />}></Route>
        <Route path="/newArrivals" element={<NewArrivals />}></Route>
        <Route path='/product/:id' element={<ProductDetail />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      <ScreenFooter /> 
    </div>
  ); 
}

export default App;
                                                