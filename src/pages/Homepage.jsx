import React from "react";
import banner from "../assets/banner-img.png";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <section className="banner max-w-[1020px] px-[30px]  py-[80px] mx-auto flex flex-col lg:flex-row items-center relative justify-center">
        <div className="relative">
          <img
            src={banner}
            className="w-[390px] sm:w-[430px] md:w-[500px] lg:w-full"
            alt=""
          />
          <div className="hidden lg:flex h-[60px] w-[60px] rounded-full bg-gradient-to-tr from-indigo-600 to-[#7851E9] absolute top-[150px] -left-[30px]"></div>
        </div>
        <div>
          <h1 className="text-[70px] leading-[85px] mt-6 text-center  lg:text-[70px] font-[500] lg:text-end lg:leading-[90px]">
            Write Your <br />{" "}
            <span className="bg-gradient-to-tr from-indigo-600 to-[#7851E9] bg-clip-text text-transparent ">
              Articles
            </span>
            <br /> Here
          </h1>
          <div className="flex justify-center lg:justify-end mt-5">
            <button
              onClick={() => navigate("/signup")}
              className="bg-indigo-600 py-3 font-semibold px-5 rounded-full text-white"
            >
              Create Account
            </button>
          </div>
        </div>
        <div className="hidden lg:flex h-[130px] w-[130px] rounded-full bg-gradient-to-tr from-indigo-600 to-[#7851E9] absolute top-[30px] -left-[150px]"></div>

        {/* <div className="h-[130px] w-[130px] rounded-full bg-gradient-to-tr from-indigo-600 to-[#7851E9] absolute top-[20px] -left-[150px]"></div>
        <div className="h-[130px] w-[130px] rounded-full bg-gradient-to-tr from-indigo-600 to-[#7851E9] absolute top-[50px] -left-[150px]"></div>
        <div className="h-[130px] w-[130px] rounded-full bg-gradient-to-tr from-indigo-600 to-[#7851E9] absolute top-[50px] -left-[150px]"></div> */}
      </section>
      <section className="banner py-[80px] mx-auto flex items-center relative bg-gradient-to-br from-indigo-600 to-[#7851E8]">
        <div className="max-w-[1080px] mx-auto">
          <div>
            <h1 className="text-[90px] font-[500] text-start leading-[110px]">
              Best <br />{" "}
              <span className="text-white ">
                Articles
              </span>
              <br /> Today
            </h1>
            <div className="flex justify-start mt-5">
              <button
                onClick={() => navigate("/articles")}
                className="text-indigo-600 py-3 font-semibold px-5 rounded-full bg-white"
              >
                See All Articles
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
