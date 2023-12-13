import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  
  const axiosPublic = useAxiosPublic();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if(currentUser) {
        // get token and store client //
        const userInfo = {email : currentUser.email};
        axiosPublic.post('/api/v1/jwt', userInfo)
        .then(res => {
            if(res.data.token){
                localStorage.setItem('access-token', res.data.token)
                setLoading(false);
            }
        }) 
    } else {
        localStorage.removeItem('access-token')
        setLoading(false);
    }
    });

    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);

  const userInfo = {
    user,
    loading,
    userRegister,
    userLogin,
    userLogout,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
