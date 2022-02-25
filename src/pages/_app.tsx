import "src/styles/index.css"
import { memo } from "react";
import { NextPage } from "next";
import Login from "src/pages/login";

const App: NextPage = ( ) => {
  return (
    <Login />
  );
};

export default memo(App);
