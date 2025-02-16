import Heading from "../../../components/Heading/Heading";

const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-[#250038] to-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <Heading
          heading={"Choose Your Plan"}
          paragraph={
            "Unlock the full potential of AI with the plan that best fits your needs."
          }
        ></Heading>

        {/* Pricing Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Essential Plan */}
          <div className="p-8 bg-black/30 border border-purple-500 rounded-lg shadow-lg hover:scale-105 transition relative">
            <h3 className="text-3xl text-purple-400 font-bold">Essential</h3>
            <p className="text-gray-400 mt-2">Perfect for getting started</p>
            <p className="mt-4 text-4xl font-bold">0$</p>
            <ul className="mt-4 space-y-2 text-gray-300 text-lg">
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">✅</span> Generate{" "}
                <span className="text-pink-400">5 images</span>
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">✅</span> Standard
                Resolution
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">❌</span> No Background
                Removal
              </li>
            </ul>
            <button className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition">
              Get Started
            </button>
          </div>

          {/* Plus Plan */}
          <div className="p-8 bg-black/30 border border-purple-500 rounded-lg shadow-lg hover:scale-105 transition relative">
            <h3 className="text-3xl text-purple-400 font-bold">Plus</h3>
            <p className="text-gray-400 mt-2">
              For casual users who need more features
            </p>
            <p className="mt-4 text-4xl font-bold">$5</p>
            <ul className="mt-4 space-y-2 text-gray-300 text-lg">
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">✅</span> Generate{" "}
                <span className="text-pink-400">10 images</span>
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">✅</span> High Resolution
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">✅</span> Background
                Removal
              </li>
            </ul>
            <button className="mt-6 px-6 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded-lg transition">
              Get Started
            </button>
          </div>

          {/* Ultimate Plan */}
          <div className="p-8 bg-black/30 border border-purple-500 rounded-lg shadow-lg hover:scale-105 transition relative">
            <h3 className="text-2xl font-semibold text-cyan-400">Ultimate</h3>
            <p className="text-gray-400 mt-2">
              For advanced users who want the best
            </p>
            <p className="mt-4 text-4xl font-bold">$10</p>
            <ul className="mt-4 space-y-2 text-gray-300 text-lg">
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">✅</span> Generate{" "}
                <span className="text-pink-400">15 images</span>
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">✅</span> Ultra HD
                Resolution
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">✅</span> AI-Powered
                Background Removal
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">✅</span> Priority Support
              </li>
            </ul>
            <button className="mt-6 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
