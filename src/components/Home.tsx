import React from "react";
import RainToggleButton from "./RainToggleButton";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <div className="relative h-full w-full ">
      <div className="z-20  absolute h-screen w-full grid place-content-center font-mono text-6xl custom-font text-white/60 drop-shadow-md top-40">
        <p className="glitch" data-text="LOFI GRID">
          LOFI GRID
        </p>
      </div>
      <div className="before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-fuchsia-700/10 before:opacity-3 relative">
        <img
          src="./assets/849790.gif"
          className="h-screen object-cover w-full"
        />
      </div>
      <div className="relative w-full h-full">
        <RainToggleButton />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
