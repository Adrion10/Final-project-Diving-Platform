import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Loader from "../layout/loader/Loader";
import MetaData from "../layout/MetaData";
import "./Profile.css";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Your Profile"} />

          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <figure className="avatar avatar-profile">
                <img
                  className="rounded-circle img-fluid"
                  src={user.avatar.url}
                  alt={user.name}
                />
              </figure>
              <Link to="/me/update" id="edit_profile" className="neon-button">
                Edit Profile
              </Link>
            </div>

            <div>
              <h4>Full Name</h4>
              <p>{user.name}</p>

              <h4>Email Address</h4>
              <p>{user.email}</p>

              <h4>Joined On</h4>
              <p>{String(user.createdAt).substring(0, 10)}</p>

              {user.role !== "admin" && (
                <Link to="/orders/me" className="neon-button ">
                  My Orders
                </Link>
              )}

              <Link to="/password/update" className="neon-button">
                Change Password
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
