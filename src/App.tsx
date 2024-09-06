import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Verify from "./pages/auth/Verify";
import ResetPassword from "./pages/auth/ResetPassword";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import PrivateRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/sidebar/Dashboard";
import Sidebar from "./components/Sidebar";
import PropertyList from "./pages/sidebar/PropertyList";
import Profile from "./pages/sidebar/Profile";
import UserList from "./pages/sidebar/UserList";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      {/*  <ul>
        
        {user?.role === "user" && (
          <>
            <li>
              <Link to="/properties/myWishlist" className="btn">
                my properties
              </Link>
            </li>
            <li>
              <Link to="/profile/user" className="btn">
                profile
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
            <li>
              <Link to="/profile/agent" className="btn">
                agent profile
              </Link>
            </li>
          </>
        )}
        {user?.role === "admin" && (
          <li>
            <Link to="/users" className="btn">
              User List
            </Link>
          </li>
        )}
      </ul> */}

      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/user" element={<Register role={"user"} />} />
        <Route path="/register/agent" element={<Register role={"agent"} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/user/verify-email" element={<Verify />} />
        <Route path="/user/reset-password" element={<ResetPassword />} />
        <Route
          path="/properties/sale"
          element={<PropertyList type={"sale"} />}
        />
        <Route
          path="/properties/rent"
          element={<PropertyList type={"rent"} />}
        />
        <Route
          path="/properties/sold"
          element={<PropertyList type={"sold"} />}
        />
        <Route
          path="/properties/myWishlist"
          element={<PropertyList type={"wishlist"} />}
        />
        <Route
          path="/properties/agent"
          element={<PropertyList type={"agent"} />}
        />
        <Route path="/profile" element={<Profile />} />

        <Route path="/users" element={<UserList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
