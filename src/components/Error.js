import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const errorMsg = useRouteError();
  console.log(errorMsg);

  return (
    <div className="error-page">
      <h1>Oops... Something went wrong...!!!</h1>
      <h2>Sorry, the page you are looking for is not available.</h2>
      <br />
      <h3>
        {errorMsg.status} :
        {errorMsg?.error?.message || "An unexpected error occurred."}
      </h3>
    </div>
  );
};

export default Error;
