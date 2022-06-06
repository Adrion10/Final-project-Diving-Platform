import React, { Fragment, useState, useEffect } from "react";

import MetaData from "../layout/MetaData";
import Loader from "../layout/loader/Loader";
import { FaUserAlt, FaAt, FaUnlockAlt } from "react-icons/fa";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/userActions";
import "./RegistrationForm.css";

const Register = ({ history }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.jpeg"
  );

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("avatar", avatar);

    dispatch(register(formData));
  };

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Register User"} />

          {/* <div className="login-form-container"> */}
          <div className={`container-login `}>
            <div className="forms-container">
              <div className="signin-signup">
                <form
                  action="#"
                  className="sign-in-form"
                  onSubmit={submitHandler}
                  encType="multipart/form-data"
                >
                  <h2 className="title-reg">Sign up</h2>

                  <div className="input-field">
                    <FaUserAlt className="regis-icon" size={24} />

                    <input
                      type="name"
                      id="name_field"
                      placeholder="Name"
                      name="name"
                      required
                      value={name}
                      onChange={onChange}
                    />
                  </div>

                  <div className="input-field">
                    <FaUserAlt className="regis-icon" size={24} />

                    <input
                      type="email"
                      id="email_field"
                      placeholder="Email"
                      name="email"
                      required
                      value={email}
                      onChange={onChange}
                    />
                  </div>

                  <div className="input-field">
                    <FaAt className="regis-icon" size={24} />

                    <input
                      type="password"
                      id="password_field"
                      placeholder="Password"
                      name="password"
                      required
                      value={password}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="avatar_upload">Avatar</label>
                    <div className="d-flex align-items-center">
                      <div>
                        <figure className="avatar mr-3 item-rtl">
                          <img
                            src={avatarPreview}
                            className="rounded-circle"
                            alt="Avatar Preview"
                          />
                        </figure>
                      </div>
                      <div className="custom-file">
                        <input
                          type="file"
                          name="avatar"
                          className="custom-file-input"
                          id="customFile"
                          accept="iamges/*"
                          onChange={onChange}
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFile"
                        >
                          Choose Avatar
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="input-field">
                    <FaUnlockAlt className="regis-icon" size={24} />
                    <input
                      type="password"
                      placeholder="Confirm the Password"
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    className="submit-btn"
                    defaultValue="Sign up"
                    disabled={loading ? true : false}
                  />
                </form>
              </div>
            </div>
            <div className="panels-container">
              <div className="panel left-panel">
                <div className="content">
                  <h3>New here ?</h3>
                  <p>Became a part of diving Community!</p>
                  <button
                    className="submit-btn transparent"
                    id="sign-up-btn"
                    onClick={submitHandler}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Register;
