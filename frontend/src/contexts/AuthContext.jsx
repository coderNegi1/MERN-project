<<<<<<< HEAD
import { createContext, useState, useContext, useEffect } from "react";
=======
import { createContext, useContext, useEffect, useState } from "react";
>>>>>>> 5ea9bb5e1c6e374cd94bb674e5b391a4331d0246
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // Load auth data from localStorage on app mount
  useEffect(() => {
<<<<<<< HEAD
    const authData = localStorage.getItem("auth");
    if (authData) {
      const parsedData = JSON.parse(authData);
      setAuth(parsedData);
      axios.defaults.headers.common["Authorization"] = `Bearer ${parsedData.token}`;
=======
    const storedData = localStorage.getItem("auth");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setAuth(parsedData);
      axios.defaults.headers.common['Authorization'] = `Bearer ${parsedData.token}`;
>>>>>>> 5ea9bb5e1c6e374cd94bb674e5b391a4331d0246
    }
  }, []);
  

<<<<<<< HEAD
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
=======
  const login = ({ user, token }) => {
    const updatedAuth = { user, token, isLoggedIn: true };
    setAuth(updatedAuth);
    localStorage.setItem("auth", JSON.stringify(updatedAuth));
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; // ✅ Fix here
  };

  const logout = () => {
    setAuth({ user: null, token: "", isLoggedIn: false });
    localStorage.removeItem("auth");
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
>>>>>>> 5ea9bb5e1c6e374cd94bb674e5b391a4331d0246
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
