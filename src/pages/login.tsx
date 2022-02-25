import type { NextPage } from "next";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login: NextPage = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

const SignInButton = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>Googleでサインイン</p>
    </button>
  );
};

const SignOutButton = () => {
  return (
    <button onClick={() => auth.signOut()}>
      <p>Googleでサインアウト</p>
    </button>
  );
};

const UserInfo = () => {
  return (
    <div>
      <img src={auth.currentUser.photoURL} alt="UserIcon" />
      <p>{auth.currentUser.displayName}</p>
    </div>
  );
};


export default Login;
