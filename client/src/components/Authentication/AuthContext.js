import React, {useContext, useState, useEffect} from "react";
import { auth } from "../../firebase";

const AuthContext = React.createContext();


export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProv({children}) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    
    
    function signup(email, password){
        auth.createUserWithEmailAndPassword(email, password)
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email);
    }

    
    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout(){
        return auth.signOut();
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false);
        });

        return unsubscribe;
    }, [])

  
    const value = {
        currentUser,
        login,
        signup,
        resetPassword,
        logout
        
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
