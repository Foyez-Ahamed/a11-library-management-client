import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [ user , setUser ] = useState(null);
    const [loading, setLoading] = useState(true);

    const userRegister = (email, password) => {
     setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password);
    }

   const userLogin = (email, password) => {
     setLoading(true);
     return signInWithEmailAndPassword(auth, email, password);
   }

   const userLogout = () => {
     setLoading(true);
     return signOut(auth);
   }

   useEffect(() => {
     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
     })
     return () => {
        return unSubscribe;
     }
   },[])

    const userInfo = {

        user,
        loading,
        userRegister,
        userLogin,
        userLogout


    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;