import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
    isLoggedIn: false,
  });

  useEffect(() => {
    const storedData = localStorage.getItem("auth");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setAuth(parsedData);
      axios.defaults.headers.common['Authorization'] = `Bearer ${parsedData.token}`;
    }
  }, []);
  

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
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
