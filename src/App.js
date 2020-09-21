import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./routes/Home";
import About from "./routes/About";
import Courses from "./routes/Courses";
import Contact from "./routes/Contact";
import Cart from "./routes/Cart";
import InvalidRoute from "./routes/InvalidRoute";
import CourseInfo from "./routes/CourseInfo";


import coursesData from './data/data';

function App() {
  const [ data, setData ] = useState([])
  const [ cart, setCart ] = useState([])

  useEffect(() => {
    setData(coursesData)
    let storage = JSON.parse(window.localStorage.getItem("cart")) || [];
    setCart([...storage])
  }, [])

  function addToCart(item, e) {
    if(cart.indexOf(item) !== -1) {
      e.preventDefault();
      alert("This course is already on your cart !")
      return
    }
    setCart([...cart, item])
    window.localStorage.setItem("cart", JSON.stringify([...cart, item])) // the updated cart state isn't available in this function
  }

  function removeFromCart(item) {
    if(cart.indexOf(item) === -1) return
    let cartItems = cart;
    cartItems.splice(cartItems.indexOf(item), 1);
    setCart([...cartItems])
    window.localStorage.setItem("cart", JSON.stringify(cartItems))
  }

  return (
    <Router>
      <Nav cartItems={cart.length} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home {...data} />
          </Route>
          <Route exact path="/Courses">
            <Courses addToCart={addToCart} />
          </Route>
          <Route path="/courses/:course">
            <CourseInfo addToCart={addToCart} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </Route>
          <Route path="*">
            <InvalidRoute />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
