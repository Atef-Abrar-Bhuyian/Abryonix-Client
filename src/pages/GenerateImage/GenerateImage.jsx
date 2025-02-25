import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
// import { Loader } from "lucide-react";

export default function GenerateImagePage() {
  const { user } = useAuth();
  const [category, setCategory] = useState("Realistic-Image");
  const [prompt, setPrompt] = useState("");

  const handleGenerate = async () => {
    if (!prompt) {
      return toast.error("No Prompt Given.");
    }

    axios
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
        console.log(res.data);
      });
  };

  return (
    <div className="mt-12 lg:mt-20 flex flex-col md:flex-row min-h-screen bg-[#0F0F1A] text-white">
      {/* Sidebar (Remains Side) */}
      <div className="w-full md:w-1/4 bg-[#161624] p-6 flex flex-col gap-4">
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
          <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
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
            {/* {isGenerating ? <Loader className="animate-spin" /> : "Generate"} */}
          </button>
        </div>

        {/* Generated Images Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
            Generated Images
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* {generatedImages.map((img, index) => (
              <div key={index} className="bg-[#222] p-4 rounded-lg">
                <img
                  src={img}
                  alt="Generated AI"
                  className="rounded-md w-full"
                />
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
