import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();
import api from "./utils/axios";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  console.log("in auth provider");
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const saveUser = (user) => {
    setUser(user);
  };

  const removeUser = () => {
    setUser(null);
  };

  const fetchUser = async () => {
    try {
      const { data } = await api.get(`/api/v1/users/showMe`);
      saveUser(data.user);
      console.log("in show me user data", data.user);
      console.log(data.msg);
    } catch (error) {
      console.log(error);
      removeUser();
    }
    setIsLoading(false);
  };

  // moved to navbar component
  // const logoutUser = async () => {
  //   try {
  //     await api.delete(`/api/v1/auth/logout`);
  //     removeUser();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log("auth provider user", user);
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        saveUser,
        user,

        removeUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider };
