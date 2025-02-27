import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router";

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
        console.log(error);
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
    <div className="container mx-auto mt-26 ">
      {/* Using the columns utility to create masonry effect */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 min-h-screen">
        {images.map((image) => (
          <div
            key={image?._id}
            className="relative rounded-lg shadow-lg mb-6 group overflow-hidden"
          >
            <Link to={`/singleImage/${image?._id}`}>
              <img
                src={image?.medium_image}
                alt="AI Generated Image"
                className="w-full h-full object-cover rounded-lg cursor-pointer transition duration-300 ease-in-out group-hover:brightness-75"
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
  );
};

export default AllGeneratedImages;
