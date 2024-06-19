import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { auth } from "../firebase";

// ===== TYPE FOR AUTH CONTEXT =====

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (email: string, password: string) => void;
  loading: boolean;
}

// ===== DEFAULT VALUE NEEDED FOR AUTH CONTEXT TYPE =====

const defaultValue: AuthContextType = {
  user: null,
  login: () => {
    throw new Error("no provider");
  },
  logout: () => {
    throw new Error("no provider");
  },
  signup: () => {
    throw new Error("no provider");
  },
  loading: false,
};

// ===== AUTH CONTEXT – GLOBAL STATE =====

export const AuthContext = createContext(defaultValue);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  // do error state here, when e.g. password characters are less than 6 (Firebase default).
  // Display it down in error block as message and send through to AuthForm on AuthPage as alert or Toastify something

  // ===== SIGNUP FUNCTIONALITY =====

  const signup = (email: string, password: string) => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // console.log(user)
        setUser(user);
        setLoading(false);
        navigate("/", { replace: true });
        // with replace true (which is a navigate option) the user can't go back to login page
        // means: when the user clicks the back button in the browser the user gets back to the page
        // where the user was before the login page
      })
      .catch((error) => {
        const { message } = error as Error;
        console.log(message);
        setLoading(false);
      });
  };

  // ===== LOGIN FUNCTIONALITY =====

  const login = (email: string, password: string) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        setLoading(false);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const { message } = error as Error;
        console.log(message);
        setLoading(false);
      });
  };

  // ===== LOGOUT FUNCTIONALITY =====

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful:
        setUser(null);
      })
      .catch((error) => {
        // An error happened:
        console.log("An error ocurred. Signout failed.", error);
      });
  };

  useEffect(() => {
    const getActiveUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          // const uid = user.uid;
          setUser(user);
        } else {
          // User is signed out
          setUser(null);
        }
        setLoading(false);
      });
    };
    getActiveUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
