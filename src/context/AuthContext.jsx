import { createContext, useContext, useState,useEffect} from "react";
import api from "../api/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    checkAuth();
  },[])

  const checkAuth = async () => {
    try {
      const { data } = await api.get("/users/me");
      setUser(data.user);
      console.log(data);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await api.post("/users/logout");
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading, checkAuth, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
