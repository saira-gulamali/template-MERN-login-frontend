import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../authContext";

function Sidebar() {
  const { user } = useGlobalContext();

  return (
    <div>
      <h1>Sidebar</h1>
      <ul>
        <li>
          <Link to="/dashboard" className="btn">
            dashboard
          </Link>
        </li>
        <li>
          <Link to="/properties/sale" className="btn">
            for sale
          </Link>
        </li>
        <li>
          <Link to="/properties/rent" className="btn">
            to rent
          </Link>
        </li>
        <li>
          <Link to="/properties/sold" className="btn">
            sold properties
          </Link>
        </li>
        {user?.role === "user" && (
          <>
            <li>
              <Link to="/properties/myWishlist" className="btn">
                my properties
              </Link>
            </li>
          </>
        )}
        {user?.role === "agent" && (
          <>
            <li>
              <Link to="/properties/agent" className="btn">
                agent properties
              </Link>
            </li>
          </>
        )}

        {user?.role === "admin" && (
          <li>
            <Link to="/users" className="btn">
              user list
            </Link>
          </li>
        )}
        <li>
          <Link to="/profile" className="btn">
            profile
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
