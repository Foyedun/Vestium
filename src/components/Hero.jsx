import React from "react";
import square from "../assets/orange-square.svg";
import casual from "../assets/casual.svg";
import android from "../assets/android button.svg";
import ios from "../assets/ios button.svg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    //   <section className="all bg-primary ">
    //     <div className="container pt-[300px] flex justify-between items-start">
    //       <div className="flex-1 pr-10">
    //         <div className="flex items-center text-white bg-primary rounded-3xl bg-border p-2 px-6 max-w-fit">
    //           <img
    //             src={square}
    //             alt="orange square"
    //             className="mr-3 rounded-3xl"
    //           />
    //           <p className="mr-3">Vestium is the new mode of dressing</p>
    //         </div>

    //         <div className="check bg-primary text-white pt-[25px]">
    //           {" "}
    //           <p className="font-bold text-[48px] leading-[50px] whitespace-pre-line ">
    //             The way we{" "}
    //             <span className="inline-block px-8 py-2 border-2 border-secondary rounded-full text-white">
    //               dress
    //             </span>{" "}
    //             is
    //             {"\n"}
    //             more important than
    //             {"\n"}
    //             how we <span className="text-secondary">look</span>.
    //           </p>
    //         </div>

    //         <div className="writeup text-white pt-[32px]">
    //           {" "}
    //           <p className="font-[600px] text-[18px] leading-[24px] whitespace-pre-line ">
    //             orem ipsum dolor sit amet, consectetur adipiscing elit,
    //             {"\n"}
    //             smod tempor incididunt ut labore et dolore
    //             {"\n"}
    //             Ut enim ad minim veniam
    //           </p>
    //            <div className="flex space-x-4 mt-[59px]">
    //   <a href="link_to_android_app">
    //     <img
    //       src={android}
    //       alt="android button"
    //       className="cursor-pointer"
    //     />
    //   </a>
    //   <a href="link_to_ios_app">
    //     <img
    //       src={ios}
    //       alt="ios button"
    //       className="cursor-pointer"
    //     />
    //   </a>
    // </div>
    //         </div>
    //       </div>
    //       <img src={casual} alt="casual girl" className="pl-[1px]" style={{ marginTop: "-50px" }}/>
    //     </div>
    //   </section>
    <section className="bg-primary pt-[85px] pb-[85px] lg:pt-[200px]  lg:pb-[250px]">
      <div className="container grid lg:grid-cols-[40%_60%] items-center gap-[50px]">
        {/* left hand side */}
        <div>
          <div className="flex gap-[6px] w-fit md:gap-[15px] items-center bg-[#F8F0E380] rounded-[20px] pl-[18px] py-[6px] pr-[25px]">
            <img src={square} alt="orange square" />
            <p className=" text-sm md:text-base font-semibold text-light leading-5 whitespace-nowrap">
              Vestium is the new mode of dressing
            </p>
          </div>
          <h1 className="text-[40px]  md:text-[48px] text-light leading-[45px] md:leading-[50px] pt-[15px] lg:pt-[25px]">
            The way we{" "}
            <span className="border-[2px] border-secondary rounded-[50%]">
              {" "}
              dress{" "}
            </span>{" "}
            is more important than how we
            <span className="text-secondary"> look </span>
          </h1>
          <p className="text-[#F8F0E3CC] text-[18px] leading-[24px] font-semibold pt-[21px] pb-[26px]  ">
            orem ipsum dolor sit amet, consectetur adipiscing elit, smod tempor
            incididunt ut labore et dolore Ut enim ad minim veniam
          </p>
          <div className="flex gap-[60px] lg:gap-[63px]">
            <Link>
              <img src={android} alt="" />
            </Link>
            <Link>
              <img src={ios} alt="" />
            </Link>
          </div>
        </div>
        {/* lashe girlfriend at the right side */}
        <div>
          <img src={casual} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
