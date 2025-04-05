import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
    isLoggedIn: false,
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsed = JSON.parse(data);
      setAuth({ ...parsed, isLoggedIn: !!parsed.token });
      axios.defaults.headers.common["Authorization"] = parsed.token;
    }
  }, []);

  useEffect(() => {
    if (auth?.token) {
      axios.defaults.headers.common["Authorization"] = auth.token;
      setAuth((prevAuth) => ({ ...prevAuth, isLoggedIn: true }));
    } else {
      setAuth((prevAuth) => ({ ...prevAuth, isLoggedIn: false }));
    }
  }, [auth?.token]);

  const login = (userData) => {
    setAuth({ ...userData, isLoggedIn: true });
    localStorage.setItem("auth", JSON.stringify(userData));
  };

  const logout = () => {
    setAuth({ user: null, token: "", isLoggedIn: false });
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ ...auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };