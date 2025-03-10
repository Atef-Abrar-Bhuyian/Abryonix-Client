import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../../components/Loader/Loader";

export default function GenerateImagePage() {
  const { user } = useAuth();
  const [category, setCategory] = useState("Realistic-Image");
  const [prompt, setPrompt] = useState("");
  const [generatedImage, isGeneratedImage] = useState(null);
  const [loading, isLoading] = useState(false);
  const axiosPublic = useAxiosPublic();

  const handleGenerate = async () => {
    if (!prompt) {
      return toast.error("No Prompt Given.");
    }
    isGeneratedImage(null);
    isLoading(true);

    axiosPublic
      .post("/api/v1/image/create", {
        email: user?.email,
        prompt,
        category,
        displayName: user?.displayName || "Anonymus",
        photoURL:
          user?.photoURL ||
          "https://img.icons8.com/?size=100&id=15263&format=png&color=000000",
      })
      .then((res) => {
        isLoading(false);
        isGeneratedImage(res?.data?.url);
        toast.success("Image generated successfully!");
        setPrompt("");
      });
  };

  return (
    <div className="pt-12 lg:pt-20 flex flex-col md:flex-row min-h-screen text-white bg-gradient-to-t from-black via-[#250038] to-black">
      {/* Sidebar (Remains Side) */}
      <div className="w-full md:w-1/4  p-6 flex flex-col gap-4 bg-gradient-to-t from-black via-[#250038] to-black border-r">
        <div>
          <h2 className="text-lg font-semibold">Model / Preset</h2>
          <select
            className="select select-bordered w-full bg-[#161624] text-white p-2 rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Realistic-Image</option>
            <option>Digital-Art</option>
            <option>Animated-Image</option>
            <option>Painting</option>
            <option>Poster</option>
            <option>Wallpaper</option>
          </select>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Generation Mode</h2>
          <select
            className="select select-bordered w-full bg-[#161624] text-white p-2 rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Fast</option>
            <option disabled className="text-gray-600">
              Quality
            </option>
            <option disabled className="text-gray-600">
              Ultra
            </option>
          </select>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Number of Images</h2>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className={`px-3 py-2 rounded-lg text-white border ${
                  num === 1
                    ? "border-pink-500"
                    : "border-gray-500 text-gray-500 cursor-not-allowed"
                }`}
                disabled={num !== 1}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6">
        <div className="bg-[#1C1C2E] p-6 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center md:text-left bg-gradient-to-r from-purple-500 via-pink-700 to-violet-800 bg-clip-text text-transparent">
            Generate AI Image
          </h1>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your image prompt..."
            className="textarea textarea-bordered w-full bg-transparent text-white p-3 rounded-lg mb-4"
          ></textarea>
          <button
            onClick={handleGenerate}
            className="btn bg-gradient-to-r from-pink-700 to-purple-800 hover:animate-pulse text-white w-full flex justify-center items-center rounded-xl"
          >
            Generate
          </button>
        </div>

        {/* Generated Images Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
            Generated Images
          </h2>
          {loading && <Loader className="animate-spin" />}
          {generatedImage && (
            <div className="flex items-center justify-center">
              <img className="w-1/2" src={generatedImage} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
