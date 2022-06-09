import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Carousel from "react-bootstrap/Carousel";
import { useAlert } from "react-alert";

import MetaData from "../layout/MetaData";
import Loader from "../layout/loader/Loader";
import Search from "../layout/Search";
import ProductCard from "./ProductCard.js";

import hero from "../../images/hero.jpg";
import hero1 from "../../images/hero1.jpg";
import hero2 from "../../images/hero2.jpg";
import hero3 from "../../images/hero3.jpg";

import { getProducts } from "../../actions/productActions";

import "./HomeProduct.css";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);

  const categories = [
    "Diving_BCD",
    "Suits",
    "Regulators",
    "Diving Tank",
    "Masks",
    "Accessories",
  ];

  const alert = useAlert();
  const dispatch = useDispatch();

  const {
    loading,
    products,
    error,
    productsCount,
    resPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, alert, error, keyword, currentPage, price, category, rating]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let count = productsCount;
  if (keyword) {
    count = filteredProductsCount;
  }
  return (
    <div className="Page-container">
      <div className="Carousel">
        <Carousel fade>
          <Carousel.Item interval={3000}>
            <img className="Carousel-Image" src={hero} alt="First slide" />
            <Carousel.Caption>
              <div className="diving-text">
                <h1 className="diving-h1">
                  Welcome to <span className="Title">NAUTILIUS_SHOP</span>
                </h1>
                <h4 className="diving-h4 ">
                  Find the best diving shop and share your memories in Web!
                </h4>
                <div className="line"></div>

                <Link to="/products" className="enter-shop">
                  ENTER THE SHOP
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="Carousel-Image" src={hero1} alt="Second slide" />
            <Carousel.Caption>
              <div className="diving-text">
                <h1 className="diving-h1">
                  Welcome to <span className="Title">NAUTILIUS_SHOP</span>
                </h1>
                <h4 className="diving-h4 ">
                  Find the best diving shop and share your memories in Web!
                </h4>
                <div className="line"></div>

                <Link to="/products" className="enter-shop">
                  ENTER THE SHOP
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="Carousel-Image" src={hero2} alt="Third slide" />
            <Carousel.Caption>
              <div className="diving-text">
                <h1 className="diving-h1">
                  Welcome to <span className="Title">NAUTILIUS_SHOP</span>
                </h1>
                <h4 className="diving-h4 ">
                  Find the best diving shop and share your memories in Web!
                </h4>
                <div className="line"></div>

                <Link to="/products" className="enter-shop">
                  ENTER THE SHOP
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="Carousel-Image" src={hero3} alt="Third slide" />
            <Carousel.Caption>
              <div className="diving-text">
                <h1 className="diving-h1">
                  Welcome to <span className="Title">NAUTILIUS_SHOP</span>
                </h1>
                <h4 className="diving-h4 ">
                  Find the best diving shop and share your memories in Web!
                </h4>
                <div className="line"></div>

                <Link to="/product" className="enter-shop">
                  ENTER THE SHOP
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <MetaData title={"Buy Best Products Online"} />
            <Link to="/products">
              <h1 id="products_heading">Diving Products</h1>
            </Link>
            <div className="col-12 col-md-6 mt-2 mt-md-0">
              <Route render={({ history }) => <Search history={history} />} />
            </div>
            <section id="products" className="container_product mt-5">
              <div className="row">
                {keyword ? (
                  <>
                    <div className="col-6 col-md-3 mt-5 mb-5">
                      <div className="px-5">
                        <Range
                          marks={{
                            1: `€1`,
                            1000: `€1000`,
                          }}
                          min={1}
                          max={1000}
                          defaultValue={[1, 1000]}
                          tipFormatter={(value) => `€${value}`}
                          tipProps={{
                            placement: "top",
                            visible: true,
                          }}
                          value={price}
                          onChange={(price) => setPrice(price)}
                        />

                        <hr className="my-5" />

                        <div className="mt-5">
                          <h4 className="mb-3">Categories</h4>

                          <ul className="pl-0">
                            {categories.map((category) => (
                              <li
                                style={{
                                  cursor: "pointer",
                                  listStyleType: "none",
                                }}
                                key={category}
                                onClick={() => setCategory(category)}
                              >
                                {category}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <hr className="my-3" />

                        <div className="mt-5">
                          <h4 className="mb-3">Ratings</h4>

                          <ul className="pl-0">
                            {[5, 4, 3, 2, 1].map((star) => (
                              <li
                                style={{
                                  cursor: "pointer",
                                  listStyleType: "none",
                                }}
                                key={star}
                                onClick={() => setRating(star)}
                              >
                                <div className="rating-outer">
                                  <div
                                    className="rating-inner"
                                    style={{
                                      width: `${star * 20}%`,
                                    }}
                                  ></div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-9">
                      <div className="row">
                        {products.map((product) => (
                          <ProductCard
                            key={product._id}
                            product={product}
                            col={4}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} col={3} />
                  ))
                )}
              </div>
            </section>

            {resPerPage <= count && (
              <div className="d-flex justify-content-center mt-5">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText={"Next"}
                  prevPageText={"Prev"}
                  firstPageText={"First"}
                  lastPageText={"Last"}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default Home;
