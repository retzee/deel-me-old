"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "@/src/libs/firebase/config";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const authStateChange = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => authStateChange();
    }, []);

    const userSignOut = () => {
        return signOut(auth);
    }

    return (
        <AuthContext.Provider value={{ user, userSignOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);