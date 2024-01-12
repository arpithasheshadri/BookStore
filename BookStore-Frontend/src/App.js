import './App.css';
import Account from './pages/account/Account';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Cart from './pages/cart/Cart';
import Wishlist from './pages/wishlist/Wishlist';
import Order from './pages/order/Order';
import { ProtectedRoute } from './ProtectedRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Account />}></Route>
        <Route exact path='/' element={<ProtectedRoute/>}>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/wishlist" element={<Wishlist />}></Route>
          <Route exact path="/order" element={<Order />}></Route>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
