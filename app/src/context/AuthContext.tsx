import  { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import Cookies from 'js-cookie';
import { getAuth } from "firebase/auth";
import { AuthProps, AuthValue } from '../types/interfaces';




const AuthContext = createContext<AuthValue|null>(null);
const auth = getAuth();

export const AuthProvider = ({ children }:AuthProps) => {
  const [user, setUser] = useState<User|null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const token = await user.getIdToken()
        Cookies.set('authToken', token);
      } else {
        setUser(null);
        Cookies.remove('authToken');
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
