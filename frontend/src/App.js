import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

import Header from "./components/layout/header/Navbar";
import Home from "./components/homeProduct/HomeProduct";

import ProductDetails from "./components/homeProduct/ProductDetails";
import Contact from "./components/contactUs/Contact";
import Memorise from "./components/Memorise/Memorise";

import Footer from "./components/layout/Footer";
import About from "./components/about/About";

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";
import ProtectedRoute from "./components/layout/ProtectedRoute";

import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Payment from "./components/cart/Payment";
import OrderSuccess from "./components/cart/OrderSuccess";

import Dashboard from "./components/admin/Dashboard";
import ProductsList from "./components/admin/ProductsList";
import NewProduct from "./components/admin/NewProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import OrdersList from "./components/admin/OrdersList";
import ProcessOrder from "./components/admin/ProcessOrder";
import UsersList from "./components/admin/UsersList";
import UpdateUser from "./components/admin/UpdateUser";
import ProductReviews from "./components/admin/ProductReviews";

import Gallery from "./components/Gallery/Gallery";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { loadUser } from "./actions/userActions";
import store from "./store/store";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  useEffect(() => {
    store.dispatch(loadUser());

    async function getStripApiKey() {
      const { data } = await axios.get("/api/stripeapi");

      setStripeApiKey(data.stripeApiKey);
    }

    getStripApiKey();
  }, []);
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="container_app">
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/products" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/posts" component={Memorise} />
        <Route path="/search/:keyword" component={Home} />
        <Route path="/product/:id" component={ProductDetails} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/password/forgot" component={ForgotPassword} exact />
        <Route path="/password/reset/:token" component={NewPassword} exact />
        <ProtectedRoute path="/me" component={Profile} exact />
        <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
        <ProtectedRoute
          path="/password/update"
          component={UpdatePassword}
          exact
        />

        <Route path="/cart" component={Cart} exact />
        <ProtectedRoute path="/shipping" component={Shipping} />
        <ProtectedRoute path="/confirm" component={ConfirmOrder} exact />
        <ProtectedRoute path="/success" component={OrderSuccess} />
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <ProtectedRoute path="/payment" component={Payment} />
          </Elements>
        )}

        <Route path="/contact" exact component={Contact} />
        <ProtectedRoute
          path="/dashboard"
          isAdmin={true}
          component={Dashboard}
          exact
        />
        <ProtectedRoute
          path="/admin/products"
          isAdmin={true}
          component={ProductsList}
          exact
        />
        <ProtectedRoute
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
          exact
        />
        <ProtectedRoute
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
          exact
        />
        <ProtectedRoute
          path="/admin/orders"
          isAdmin={true}
          component={OrdersList}
          exact
        />
        <ProtectedRoute
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
          exact
        />
        <ProtectedRoute
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
          exact
        />
        <ProtectedRoute
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
          exact
        />
        <ProtectedRoute
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
          exact
        />
        {!loading && (!isAuthenticated || user.role !== "admin") && <Footer />}
      </div>
    </Router>
  );
}
export default App;
