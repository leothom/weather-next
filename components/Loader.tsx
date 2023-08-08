import React from "react";
import loader from "../public/loader.gif";
import Image from "next/legacy/image";

function Loader() {
  return (
    <>
      <Image
        src="/bg-clouds.png"
        layout="fill"
        alt="gradient background"
        className="object-cover z-[-1] filter blur-xl"
      />
      <div className="grid h-screen place-items-center">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Loader;
