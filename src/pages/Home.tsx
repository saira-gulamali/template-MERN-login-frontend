import React from "react";
import { Link, Navigate } from "react-router-dom";

import { useGlobalContext } from "../authContext";

export default function Home() {
  const { user } = useGlobalContext();

  return (
    <>
      {user && <Navigate to="/dashboard" />}

      <h2>
        <span>Home</span>
        App
      </h2>
      <p>
        I'm baby viral enamel pin chartreuse cliche retro af selfies kinfolk
        photo booth plaid jianbing actually squid 3 wolf moon lumbersexual. Hell
        of humblebrag gluten-free lo-fi man braid leggings.
      </p>
      <p>
        Cloud bread kale chips wayfarers deep v chicharrones leggings
        fingerstache actually blog cliche four dollar toast. Sriracha ugh
        kickstarter, next level la croix butcher lomo.
      </p>

      <Link to="/login" className="btn">
        Login
      </Link>
      <Link to="/register/user" className="btn">
        Register User
      </Link>
      <Link to="/register/agent" className="btn">
        Register Agent
      </Link>
      <Link to="/dashboard" className="btn">
        Admin Dashboard
      </Link>
      <Link to="/forgot-password" className="btn">
        Forgot Password
      </Link>
      <Link to="/user/reset-password" className="btn">
        Reset Password
      </Link>
      <Link to="/user/verify-email" className="btn">
        Verify
      </Link>
    </>
  );
}
