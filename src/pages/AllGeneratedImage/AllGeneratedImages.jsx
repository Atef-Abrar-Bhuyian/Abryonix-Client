import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router";
import { Fade } from "react-awesome-reveal";

const AllGeneratedImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let unshuffled = await axiosPublic.get("/api/v1/image/all");
        let res = unshuffled?.data
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);
        setImages(res);
      } catch (error) {
        // console.log(error);
        setError("Error fetching images");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [axiosPublic]);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <Fade delay={1000}>
      <div className=" bg-gradient-to-l from-black via-[#250038] to-black ">
      {/* Using the columns utility to create masonry effect */}
      <div className="pt-26 w-11/12 mx-auto  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 min-h-screen">
        {images.map((image) => (
          <div
            key={image?._id}
            className="relative rounded-lg shadow-lg mb-6 group overflow-hidden"
          >
            <Link to={`/singleImage/${image?._id}`}>
              <img
                src={image?.medium_image}
                alt="AI Generated Image"
                className="w-full h-full object-cover rounded-lg cursor-pointer transition duration-300 ease-in-out group-hover:brightness-75 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-2 text-white text-sm bg-opacity-50 py-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                {image.prompt.slice(1, 80)}...
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </Fade>
  );
};

export default AllGeneratedImages;
