import Spline from "@splinetool/react-spline";
import { FaChevronDown } from "react-icons/fa";

export default function Hero({ onArrowClick }) {
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

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaChevronDown
          className="text-4xl text-purple-500 cursor-pointer"
          onClick={onArrowClick}
        />
      </div>
    </div>
  );
}
