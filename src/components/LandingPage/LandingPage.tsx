import React from "react";
import { Navbar } from "@/components";
import { useLandingPage } from "@/hooks";

const LandingPage = () => {
  const { blurModalBackground } = useLandingPage();
  return (
    <>
      <div className="w-screen  h-screen  bg-theme overflow-hidden">
        <Navbar />

        <div
          className={`w-screen h-screen flex flex-col items-center justify-center text-center ${
            blurModalBackground ? "blur" : ""
          } `}
        >
          <h1 className="text-DCA text-6xl">
            Find any quote in <br /> millions of movie lines
          </h1>
          <button className="mt-6 bg-red text-white py-2 px-4 rounded-4.8">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
