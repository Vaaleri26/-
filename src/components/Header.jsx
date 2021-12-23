import { NavLink } from 'react-router-dom';

import React from "react";
const Header = () => {
    return (
        <>
    <NavLink to="/">Main</NavLink>
    <NavLink to="/signin">Sign in</NavLink>
    <NavLink to="/profile">Profile</NavLink>
    {registered() ? <button onClick={() => logout()}>Выйти</button> : null}
    </>
  
  );
 
};
function registered() {
  if (localStorage.getItem("registered")) {
    return true;
  } else return false;
}

function logout() {
  localStorage.removeItem("registered");
  window.location.reload();
}
export default Header;