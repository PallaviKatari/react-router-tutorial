import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fakeAuth } from "./fakeAuth";

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  console.log({ location });

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.login(() => {
      navigate(from);
    });
  };

  return (
    <div>
      <p style={{color:'white',fontSize:21}}>You must log in to view the page at {from.pathname}</p>
      <button onClick={login} style={{color:'white',fontSize:21,backgroundColor:'transparent'}}>Log in</button>
    </div>
  );
}

export default LoginPage;
