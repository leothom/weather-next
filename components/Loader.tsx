import React from "react";
import loader from "../public/loader.gif";
import Image from "next/image";

function Loader() {
  return (
    <>
      <Image className="w-[200px] m-auto block" src={loader} alt="loader" />
    </>
  );
}

export default Loader;
