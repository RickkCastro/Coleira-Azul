import "./styles.css";

import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { auth, db } from "../../backend/firebase";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { doc, onSnapshot } from "firebase/firestore";

export function LoginPG() {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({} as User);

  function handleGoogleSingIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
    });
  }

  useEffect(() => {
    if (user.uid) {
      const sub = onSnapshot(doc(db, "users", user.uid), (doc) => {
        if(doc.data().adm == true) {
          navigate("/add-itens")
        } else {
          navigate("/")
        }
      });

    }
  }, [user]);

  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <span>
        Entre em uma conta com a permissão de adiministrador do sistema
      </span>
      <button className="button" onClick={handleGoogleSingIn}>
        Entrar com o Google
      </button>
    </div>
  );
}
