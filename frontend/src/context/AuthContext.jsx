import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Initialize with null, but allow manual data injection via login
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Fallback for manual data if userData is missing (though Login.jsx provides it)
    setUser(
      userData || {
        name: "Bruce Wayne",
        email: "bruce@wayne.ent",
        role: "Vigilante",
      }
    );
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
