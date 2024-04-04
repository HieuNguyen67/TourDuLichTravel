import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null); 

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      setLoggedIn(true);
      setToken(storedToken);

      const storedUser = JSON.parse(localStorage.getItem("user"));
      const storedUserId = localStorage.getItem("userId");

      setUser(storedUser);
      setUserId(storedUserId);
    }
  }, []);

  const login = (userData, authToken) => {
    setLoggedIn(true);
    setUser(userData);
    setUserId(userData.id); 
    setToken(authToken);

    localStorage.setItem("authToken", authToken);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("userId", userData.id);
  };

  const logout = () => {
    setLoggedIn(false);
    setUser(null);
    setUserId(null);
    setToken(null);

    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, token, userId, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
