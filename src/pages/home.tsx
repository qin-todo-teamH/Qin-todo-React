import React from "react";
import { PlusCircleIcon } from "@heroicons/react/solid";

import { Header } from "src/components/Layout/Header";

const Home = () => {
  return (
    <Header title="Home">
      <div className="flex my-16 mx-20">
        <div className=" w-full h-screen">
          <h1 className="text-2xl font-bold text-rose-500">今日する</h1>
          <div className="flex my-6">
            <PlusCircleIcon className="w-6 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="タスクを追加する"
              className="outline-none focus:border-b-2 border-b-rose-500"
            />
          </div>
        </div>
        <div className=" w-full h-screen">
          <h1 className="text-2xl font-bold text-orange-500">明日する</h1>
          <div className="flex my-6">
            <PlusCircleIcon className="w-6 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="タスクを追加する"
              className="outline-none focus:border-b-2 border-b-orange-500"
            />
          </div>
        </div>
        <div className=" w-full h-screen">
          <h1 className="text-2xl font-bold text-yellow-500">今度する</h1>
          <div className="flex my-6">
            <PlusCircleIcon className="w-6 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="タスクを追加する"
              className="outline-none focus:border-b-2 border-b-yellow-500"
            />
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Home;
