import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userActions";

import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  // const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 800) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };

  return (
    <>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div class="logo-wrapper">
            <div class="logo"></div>
          </div>
        </div>

        <div className="list-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/menu-bars.png?raw=true`}
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/cross-menu-icon.png?raw=true`}
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link to="/" onClick={handleClose} activeclassname="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleClose} activeclassname="active">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={handleClose}
                activeclassname="active"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link to="/posts" onClick={handleClose} activeclassname="active">
                Memorise
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleClose}
                activeclassname="active"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                onClick={handleClose}
                activeclassname="active"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <span id="cart" className="ml-3">
              <TiShoppingCart />
              Cart
            </span>
            <span className="ml-1" id="cart_count">
              {cartItems.length}
            </span>
          </Link>

          {user ? (
            <div className="ml-4 dropdown d-inline">
              <Link
                to="#!"
                className="btn dropdown-toggle text-black  mr-4"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span>{user && user.name}</span>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user && user.role === "admin" && (
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                )}
                <Link className="dropdown-item" to="/orders/me">
                  Orders
                </Link>
                <Link className="dropdown-item" to="/me">
                  Profile
                </Link>
                <Link
                  className="dropdown-item text-danger"
                  to="/"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link to="/login" className="btn ml-4" id="login_btn">
                <i className="fas fa-user"></i>
                Login
              </Link>
            )
          )}
        </div>
      </nav>

      {/* --+++++ 3D navbar start ++++++-- */}
      <ul className="menu">
        <li className="menu_list">
          <span className="front fas fa-home"></span>
          <Link to="/" className="side">
            home
          </Link>
        </li>
        <li className="menu_list">
          <span className="front fas fa-store"></span>
          <Link to="/products" className="side">
            Shop
          </Link>
        </li>
        <li className="menu_list">
          <span className="front fas fa-image"></span>
          <Link to="/posts" className="side">
            Memorise
          </Link>
        </li>
        <li className="menu_list">
          <span className="front fas fa-photo-video"></span>
          <Link to="/gallery" className="side">
            Gallery
          </Link>
        </li>
        <li className="menu_list">
          <span className="front fas fa-paper-plane"></span>
          <Link to="contact" className="side">
            contact
          </Link>
        </li>
      </ul>
      {/* --+++++ 3D navbar end ++++++--> */}
    </>
  );
};

export default Navbar;
