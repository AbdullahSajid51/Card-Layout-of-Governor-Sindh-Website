import React from "react";
import Image from "next/image";
import Card from "../../image/firstCard.jpg";

const Cards = () => {
  return (
    // <main className="flex justify-around">
    //   {/* Left Card */}
    //   <div className="w-[300px] h-[300px]">
    //     <Image src={Card} alt="First-Card" className="rounded-lg" />
    //   </div>

    //   {/* Middle Card  */}
    //   <div className="w-[300px] h-[300px]">
    //     <Image src={require("../../image/secondCard.jpg")} alt="Second-Card" className="rounded-lg"/>
    //     {/* <Image src={""} alt="Second-Card" /> */}
    //   </div>

    //   {/* Right Card  */}
    //   <div className="w-[300px] h-[300px]">
    //     <Image src={require("../../image/thirdCard.jpg")} alt="Third-Card" className="rounded-lg"/>
    //   </div>
    // </main>
    // ----------------------------------------------
    <main className="flex flex-wrap justify-center gap-4 p-4">
      
      {/* Left Card */}
      <div className="w-full sm:w-[280px] h-[200px] text-black">
        <Image
          src={Card}
          alt="First-Card"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      {/* Middle Card */}
      <div className="w-full sm:w-[280px] h-[200px] text-black">
        <Image
          src={require("../../image/secondCard.jpg")}
          alt="Second-Card"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      {/* Right Card */}
      <div className="w-full sm:w-[280px] h-[200px] text-black">
        <Image
          src={require("../../image/thirdCard.jpg")}
          alt="Third-Card"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
    </main>
  );
};

export default Cards;
// -----------------------------------
