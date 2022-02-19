import "../style/index.css";
import { memo } from "react";
import { NextPage } from "next";

const App: NextPage = ({ Component, pageProps }) => {
  return (
    <div>
      <p>hello</p>
    </div>
  );
};

export default memo(App);
