import type { NextPage } from "next";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { HiOutlineLogout } from "react-icons/hi";

export const SignIn: NextPage = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="">
        <div className="flex">
          <div className="h-screen w-1/2 text-center mx-auto">
            <h1 className="text-3xl font-bold font-mono tracking-tighter">
              アカウントの連携
            </h1>

            {user ? (
              <>
                <UserInfo />
                <SignOutButton />
              </>
            ) : (
              <SignInButton />
            )}
          </div>
          <div className="w-80 h-36 rounded-2xl shadow-md mx-8">
            <div className="m-6">
              {user ? (
                <>
                  <UserInfo />
                  <SignOutButton />
                </>
              ) : (
                <SignInButton />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SignInButton = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>Googleでログイン</p>
    </button>
  );
};

const SignOutButton = () => {
  return (
    <div className="flex mt-7">
      <HiOutlineLogout className="my-auto text-red-700" />
      <button onClick={() => auth.signOut()}>
        <p className="text-red-700 font-bold font-mono tracking-tighter text-sm mx-2">
          ログアウト
        </p>
      </button>
    </div>
  );
};

const UserInfo = () => {
  return (
    <div className="flex">
      <img
        src={auth.currentUser.photoURL}
        alt="UserIcon"
        className="rounded-full w-12"
      />
      <p className="font-bold font-mono tracking-tighter px-3 py-1">
        {auth.currentUser.displayName}
      </p>
    </div>
  );
};
