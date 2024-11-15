import React from "react";

const HeroSection = () => {
  return (
    <main className="flex flex-auto gap-5 mx-2 p-5">
      {/* Left Side  */}
      <div className="bg-yellow-900 w-1/2 h-44 text-center  text-black">
        Left Section
      </div>

      {/* Right Side  */}
      <div className="bg-red-900 w-6/12 h-44 text-center text-black">
        Right Section
      </div>
    </main>
  );
};

export default HeroSection;
