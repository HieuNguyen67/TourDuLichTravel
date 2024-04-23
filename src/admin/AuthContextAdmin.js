import { createContext, useContext, useState } from "react";

const AuthContextAdmin = createContext();

export const AuthProvider1 = ({ children }) => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken") || null
  );
  const [adminUsername, setAdminUsername] = useState(
    localStorage.getItem("adminUsername") || null
  );

  const login = (token, username) => {
    setAdminToken(token);
    setAdminUsername(username);

    localStorage.setItem("adminToken", token);
    localStorage.setItem("adminUsername", username);
  };

  const logout = () => {
    setAdminToken(null);
    setAdminUsername(null);

    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUsername");
  };

  return (
    <AuthContextAdmin.Provider value={{ adminToken, adminUsername, login, logout }}>
      {children}
    </AuthContextAdmin.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContextAdmin);
};
