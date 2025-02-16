import Lottie from "lottie-react";
import heroBanner from "../../../assets/Lottie/HeroBanner.json";
import { Fade } from "react-awesome-reveal";

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#250038] to-black py-20">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center max-w-7xl mx-auto px-6">
        {/* Lottie Animation */}
        <Lottie
          className="lg:w-3xl md:w-2xl"
          animationData={heroBanner}
        ></Lottie>

        <div className="relative text-white text-center">
          {/* Glowing Circle Effect */}
          <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-48 h-48 rounded-full bg-pink-500 opacity-20 blur-3xl animate-pulse"></div>

          {/* Hero Text */}
          <Fade direction="down" triggerOnce="true">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
              Welcome to Abryonix
            </h1>
          </Fade>
          <Fade direction="down" triggerOnce="true">
            <p className="mt-4 text-2xl md:text-3xl font-medium text-pink-300">
              Where Imagination Meets AI
            </p>
          </Fade>

          <Fade direction="down" triggerOnce="true">
            <p className="mt-4 text-lg md:text-xl text-purple-300 max-w-2xl">
              Generate stunning visuals, transform text into images, and
              experience the power of AI-driven creativity.
            </p>
          </Fade>

          {/* Highlights */}
          <div className="mt-6 space-y-2 text-lg">
            <Fade direction="down" triggerOnce="true">
              <p>
                🔹 <span className="text-pink-400">AI-powered innovation</span>{" "}
                at your fingertips.
              </p>
            </Fade>

            <Fade direction="down" triggerOnce="true">
              <p>
                {" "}
                <span className="text-purple-400">
                  Create. Transform. Inspire.
                </span>
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
