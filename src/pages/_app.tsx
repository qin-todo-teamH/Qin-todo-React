import "src/styles/index.css"
import { memo } from "react";
import { NextPage } from "next";
import { SignIn } from "src/pages/signin";

const App: NextPage = ( ) => {
  return (
    <SignIn />
  );
};

export default memo(App);
