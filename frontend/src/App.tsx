import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Products from './Products/Products';
import Home from './Home/Home';
import Orders from './Orders/Orders'
import Payment from './Payment/Payment'

import data from './Products/data';


function App(){
  function openMenu() {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <Router>
    <div className="grid-container">
      <head>
        <title>Flying Sun</title>
      </head>
      <link rel="stylesheet" href="style.css"></link>
      <body>
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>&#9776;</button>
                    <a href="index.html">Flying Sun</a>
                </div>
                <div className="header-links">
                <Link to ="/" > Home</Link>
                <Link to = "/catalog">Catalog</Link>
                <Link to="/orders">Orders</Link>
                <Link to ="/payment">Payment</Link>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Pants</a>
                    </li>

                    <li>
                        <a href="index.html">Shirts</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
            <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path= "/catalog">
              <div className="content">
      <ul className="products">
      {
        data.products.map(product =>
          <li>
            <div className="product">
            <img className="product-image" src={product.imageURL} alt="product" />
            <div className="product-name">
            <a href="product.html">{product.name}</a>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-rating">{product.rating} Stars ({product.numberOfReviews} Reviews</div>
            </div>
          </li>
          )
      } 
      </ul>
    </div>
              </Route>
              <Route path="/orders" >
                <Orders />
              </Route>
              <Route path="/payment" >
                <Payment />
              </Route>
            </Switch>
            </main>
            <footer className="footer">
                &copy; 2021 Flying Sun
            </footer>
        </body>
  </div>
  </Router>
  );
}

export default App;



