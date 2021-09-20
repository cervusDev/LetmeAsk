import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";

import { auth } from "./services/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext({} as AuthContextType);

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined,
  signinWithGoogle: () => Promise<void>;
}

export function App() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;
  
        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account");
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,   
        });
      }
    })
  },[])

  async function signinWithGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
  
    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,   
      });
    }
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signinWithGoogle }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/room/new" component={NewRoom} />
        </Switch>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}
