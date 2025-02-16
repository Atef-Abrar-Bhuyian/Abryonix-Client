import Heading from "../../../components/Heading/Heading";

const Features = () => {
    return (
        <section className="pb-20 pt-0 bg-gradient-to-b from-black via-[#250038] to-black text-white">
        <div className="lg:max-w-7xl mx-auto text-center">
          <Heading heading={"AI-Powered Features"} paragraph={"Discover the powerful AI-driven tools designed to spark your creativity."}></Heading>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black/30 rounded-lg shadow-lg hover:scale-105 transition cursor-pointer border border-purple-900">
              <h3 className="text-xl font-semibold text-purple-400">
                Text to Image
              </h3>
              <p className="text-gray-400">
                Generate stunning images from text prompts.
              </p>
            </div>
            <div className="p-6 bg-black/30 rounded-lg shadow-lg hover:scale-105 transition border border-purple-900  cursor-pointer">
              <h3 className="text-xl font-semibold text-pink-400">
                AI Background Remover
              </h3>
              <p className="text-gray-400">
                Remove backgrounds from images in seconds.
              </p>
            </div>
            <div className="p-6 bg-black/30 rounded-lg shadow-md hover:scale-105 transition  border border-purple-900  cursor-pointer">
              <h3 className="text-xl font-semibold text-cyan-400">
                JSON File Generator
              </h3>
              <p className="text-gray-400">
                Convert text input into structured JSON files.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Features;