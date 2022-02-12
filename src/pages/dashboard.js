import { useEffect, useState } from "react";
import Feed from "../components/Feed/Feed.js";

function Dashboard() {

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex">
          <div className="name ">
              <h1 className="text-white">Hello Nomnom!</h1>
              <h4 className="text-white">Mint NFTs of your favourite songs!</h4>
          </div>
          <div className="notif">

          </div>
      </div>
      <div className="flex">
            <Feed />
      </div>
    </div>
  );
}

export default Dashboard