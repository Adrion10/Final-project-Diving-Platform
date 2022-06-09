import React, {  useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Loader from "../layout/loader/Loader";
import MetaData from "../layout/MetaData";

import { useAlert } from "react-alert";
import { FaLock, FaAt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";

const Login = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (isAuthenticated) {
      history.push(redirect);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history, redirect]);

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Login"} />

          {/* <div className="Title-Container">
            <h1 className="Title-Contact">Registration</h1>
          </div> */}
          <div className="login-form-container">
            <div className={`container-login `}>
              <div className="forms-container">
                <div className="signin-signup">
                  <form
                    action="#"
                    className="sign-in-form"
                    onSubmit={onSubmitSignIn}
                  >
                    <h2 className="title-reg">Sign in</h2>
                    <div className="input-field">
                      <FaAt className="regis-icon" size={24} />
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-field">
                      <FaLock className="regis-icon" size={24} />

                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Link to="/password/forgot" className="float-right mb-4">
                      Forgot Password
                    </Link>
                    <input
                      type="submit"
                      defaultValue="Login"
                      className="submit-btn"
                      disabled={loading ? true : false}
                    />
                    <Link to="/register" className="float-right mt-3">
                      New User?
                    </Link>
                  </form>
                </div>
              </div>
              <div className="panels-container">
                <div className="panel left-panel">
                  <div className="content">
                    <h3>One of us ?</h3>
                    <p>Sign in Diving Community.</p>
                  </div>
                  <div className="gradient"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
