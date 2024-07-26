import React from "react";
import Spline from "@splinetool/react-spline";
import { LuMouse } from "react-icons/lu";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      {/* Spline as background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/GaRcnvLmVlrI16C2/scene.splinecode" />
      </div>
      {/* Text content on top with responsive sizes */}
      <div className="z-10">
        <p className="text-xl sm:text-2xl md:text-3xl text-purple-500 mb-2">
          Hi, I'm
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-center mb-3">
          ETHAN LIU
        </h1>
        <p className="text-lg sm:text-xl md:text-4xl text-center">
          Software Engineering Student
        </p>
      </div>
      {/* Scroll down icon */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div className="text-4xl text-purple-500 flex items-center">
          <LuMouse />
          <h3 className="text-lg ml-2">scroll down</h3>
        </div>
      </motion.div>
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        <div className="h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#63e_100%)]"></div>
      </div>
    </div>
  );
}
