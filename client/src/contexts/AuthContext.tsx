/** BashaMate practical marketplace: browser-only account state for the course prototype. */

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthUser = { name: string; email: string };
type AuthContextValue = {
  user: AuthUser | null;
  register: (name: string, email: string) => void;
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const authStorageKey = "bashamate-local-account";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(authStorageKey);
    if (!stored) return;
    try { setUser(JSON.parse(stored)); } catch { window.localStorage.removeItem(authStorageKey); }
  }, []);

  const saveUser = (nextUser: AuthUser) => {
    setUser(nextUser);
    window.localStorage.setItem(authStorageKey, JSON.stringify(nextUser));
  };

  const value = useMemo<AuthContextValue>(() => ({
    user,
    register: (name, email) => saveUser({ name: name.trim() || "Faisal Mahmud", email: email.trim().toLowerCase() }),
    login: (email) => saveUser({ name: user?.name || "Faisal Mahmud", email: email.trim().toLowerCase() }),
    logout: () => { setUser(null); window.localStorage.removeItem(authStorageKey); },
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}

