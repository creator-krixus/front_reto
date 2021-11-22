import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/NavBar';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';
import Orders from './components/orders/Orders';
import OrdersPending from './components/pending/OrdersPending';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Orders" element={<Orders/>}/>
            <Route path="/OrdersPending" element={<OrdersPending/>}/>
            <Route path="*" element={<NotFound/>} />
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
