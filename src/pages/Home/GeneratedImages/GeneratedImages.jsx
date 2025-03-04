import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";
import Heading from "../../../components/Heading/Heading";

const GeneratedImages = () => {
  const axiosPublic = useAxiosPublic();
  const [images, setImages] = useState([]);
  console.log(images);

  useEffect(() => {
    const fetchImages = async () => {
      let unshuffled = await axiosPublic.get("/api/v1/image/limitedImages");
      let res = unshuffled?.data
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      setImages(res);
    };
    fetchImages();
  }, [axiosPublic]);

  return (
    <div className="bg-black">
      <div className="w-11/12 mx-auto">
        <Fade>
          <Heading heading={"Generated Images"} />{" "}
        </Fade>
        <Fade>
          {/* Using the columns utility to create masonry effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 min-h-screen">
            {images.map((image) => (
              <div
                key={image?._id}
                className="relative rounded-lg shadow-lg mb-6 group overflow-hidden"
              >
                <Link to={`/singleImage/${image?._id}`}>
                  <img
                    src={image?.medium_image}
                    alt="AI Generated Image"
                    className="w-full h-full object-cover rounded-lg cursor-pointer transition duration-300 ease-in-out group-hover:brightness-75 group-hover:-translate-y-2 group-hover:translate-x-2"
                  />

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white text-sm bg-opacity-50 py-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    {image.prompt.slice(1, 60)}...
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Fade>
        <div className=" flex justify-center items-center pb-10">
          <Link
            to="/allImages"
            className="relative px-6 py-2 rounded-lg text-white font-medium transition-all duration-300 border border-purple-600 backdrop-blur-md bg-transparent hover:bg-[#250038] hover:border-purple-400 hover:shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          >
            See All Images
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneratedImages;
