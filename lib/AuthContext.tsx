"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { isAuthenticated, setAuthenticated, verifyPassword, logout as doLogout } from "./auth";

interface AuthContextType {
  authed: boolean;
  loading: boolean;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  authed: false,
  loading: true,
  login: async () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuthed(isAuthenticated());
    setLoading(false);
  }, []);

  const login = async (password: string): Promise<boolean> => {
    const ok = await verifyPassword(password);
    if (ok) {
      setAuthenticated(true);
      setAuthed(true);
    }
    return ok;
  };

  const logout = () => {
    doLogout();
    setAuthed(false);
  };

  return (
    <AuthContext.Provider value={{ authed, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
