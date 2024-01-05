import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null); // Added user ID state

  useEffect(() => {
    // Check if there's a stored token in localStorage
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      // If yes, restore the login status
      setLoggedIn(true);
      setToken(storedToken);

      // Additionally, retrieve user details and user ID from localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const storedUserId = localStorage.getItem("userId");

      setUser(storedUser);
      setUserId(storedUserId);
    }
  }, []);

  const login = (userData, authToken) => {
    setLoggedIn(true);
    setUser(userData);
    setUserId(userData.id); // Assuming user object has an 'id' property
    setToken(authToken);

    // Save the token, user details, and user ID in localStorage
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("userId", userData.id);
  };

  const logout = () => {
    setLoggedIn(false);
    setUser(null);
    setUserId(null);
    setToken(null);

    // Remove token, user details, and user ID from localStorage
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
