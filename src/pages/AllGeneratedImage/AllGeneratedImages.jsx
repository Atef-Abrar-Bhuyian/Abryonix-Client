import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../../components/Loader/Loader";

const AllGeneratedImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axiosPublic.get("/api/v1/image/all");
        setImages(res.data);
      } catch (error) {
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
    <div className="mt-24">
      {/* Using the columns utility to create masonry effect */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6">
        {images.map((image) => (
          <div
            key={image?._id}
            className="bg-gray-300 rounded-lg shadow-lg mb-6 break-inside-avoid"
          >
            <img
              src={image?.medium_image}
              alt={"AI Generated Image"}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGeneratedImages;
