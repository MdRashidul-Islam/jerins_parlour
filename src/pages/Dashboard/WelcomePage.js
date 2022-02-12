import React from "react";
import useAuth from "../../hooks/useAuth";

const WelcomePage = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Hello, {user?.displayName}</h1>
    </div>
  );
};

export default WelcomePage;
