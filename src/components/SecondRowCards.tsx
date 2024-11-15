import React from "react";
import Image from "next/image";

const SecondRowCards = () => {
  return (
    <main className="flex flex-wrap justify-center gap-4 p-4">
      {/* Left Card */}
      <div className="w-full sm:w-[430px] h-[400px]">
        <Image
          src={require("../../image/kamrantessori.jpg") }
          alt="Kamran-tessori"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      {/* Right Card */}
      <div className="w-full sm:w-[430px] h-[400px]">
        <Image
          src={require("../../image/fourthCard.jpg")}
          alt="Fourth-Card"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
    </main>
  );
};

export default SecondRowCards;
