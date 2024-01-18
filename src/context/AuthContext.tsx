import { PropsWithChildren, createContext, useState } from "react";
// import { User } from "../@types/user";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, type User } from "firebase/auth";
import { auth } from "../firebase";

interface AuthContextType {
    user: User | null
    login: (email: string, password: string) => void
    logout: () => void
    signup: (email: string, password: string) => void
    loading: boolean
}

const defaultValue: AuthContextType = {
    user: null,
    login: () => { throw new Error("no provider")},
    logout: () => { throw new Error("no provider")},
    signup: () => { throw new Error("no provider")},
    loading: false,
}

export const AuthContext = createContext(defaultValue);


export const AuthContextProvider = ( {children}: PropsWithChildren) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    // do error state here, when e.g. password characters are less than 6 (Firebase default). 
    // Display it down in error block as message and send through to AuthForm on AuthPage as alert or Toastify something

    const signup = (email: string, password: string) => {
        
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            setUser(user);
            setLoading(false);  
            navigate("/articles", { replace: true});
            // with replace true (which is a navigate option) the user can't go back to login page
            // means, when the user clicks the back button in the browser the user get back to the page 
            // where the user was before the login page 

        })
            .catch((error) => {
                const { message } = error as Error;
                console.log(message);
                setLoading(false);
            });
}

    const login = (email: string, password: string) => {

        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setUser(user);
                setLoading(false);
                navigate("/articles", { replace: true});


            })
            .catch((error) => {
                const { message } = error as Error;
                console.log(message);
                setLoading(false);
            });
        
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
            { children }
        </AuthContext.Provider>
        )
}
