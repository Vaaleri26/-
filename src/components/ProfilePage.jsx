import React from "react";
import { Navigate } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div>
      {registered() ? <Navigate to="/" /> : null}
      <p>Login: {localStorage.getItem("login")}</p>
      <p>Email: {localStorage.getItem("email")}</p>
      <p>Password: {localStorage.getItem("password")}</p>
    </div>
  );
};
function registered() {
    if (localStorage.getItem("registered")) {
      return false;
    } else {
      return true;
    }
  }
export default ProfilePage;