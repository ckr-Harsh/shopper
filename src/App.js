import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
// import { Cart } from './features/cart/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/cart" component={CartPage}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
