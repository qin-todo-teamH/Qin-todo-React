import Head from "next/head";
import Link from "next/link";
import { VFC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "src/firebase/firebase";

type Props = {
  children: any;
  title?: string;
};

export const Header: VFC<Props> = ({ title, children }) => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Head>{title}</Head>
      <div className="justify-center flex">
        <div className="flex h-20 justify-between w-3/4 items-center">
          <Link href="/home">
            <h1 className="text-3xl cursor-pointer">Qin Todo</h1>
          </Link>

          {user ? (
            <div>
              <Link href="/signin">
                <a>
                  <img
                    src={auth.currentUser.photoURL}
                    alt="UserIcon"
                    className="rounded-full w-9 ring-1 ring-orange-500 "
                  />
                </a>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};
