import { BsArrowDownRightCircle } from "react-icons/bs";

import bannerImg from "../../assets/bannerImg.png";
import { useNavigate } from "react-router";
import {Canvas} from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei";

import { Suspense } from "react";

const Banner = ({ catRef }) => {
  const navigate = useNavigate();

  return (
    <main className=" flex justify-between items-center py-1 mb-5  relative">
      <section className="max-w-xl mx-auto sm:mx-0  w-full py-2  lg:w-1/3">
        <h1 className="text-6xl  sm:text-7xl lg:text-8xl font-semibold  py-3 w-full ">
          Crafting your vision
        </h1>
        <p className="py-3 text-md  text-gray-600">
          Custom made order just for you
          <br />
          3D printed, Clay , Virtual Objects
        </p>
      
        <section className="flex items-center">
          <button
            className="btn-primary text-sm md:text-base"
            onClick={() => navigate("/products")}
          >
            Enter The Virtual Shop
          </button>
          <button
            className="p-3 flex items-center"
            onClick={() =>
              catRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <span className="mx-2 text-sm md:text-base">Explore More</span>{" "}
            <BsArrowDownRightCircle className="text-lg" />
          </button>
        </section>
      </section>
      <section className="hidden w-1/2 lg:flex justify-end">
        <img src={bannerImg} alt="bannerImg" className="w-2/3 h-full" />
      </section>
    </main>
  );
};

export default Banner;
