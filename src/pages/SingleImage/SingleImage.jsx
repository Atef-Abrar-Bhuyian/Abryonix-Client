import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router";
import { FaRegHeart } from "react-icons/fa";

const SingleImage = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [images, setImages] = useState({});
  console.log(images);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axiosPublic.get(`/api/v1/image/singleImage/${id}`);
      setImages(res.data);
    };
    fetchImages();
  }, [axiosPublic, id]);
  return (
    <div className="mt-16 container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 p-2">
          <img
            className="rounded-xl"
            src={images?.original_image}
            alt="Ai Generated Photo"
          />
        </div>
        <div className="flex-1 px-2">
          <div className="flex gap-3 items-center justify-between">
            <div className="flex gap-3">
              <img
                className="w-12 rounded-full"
                src={images?.photoURL}
                alt="User Image"
              />
              <div className="space-y-1">
                <h5>{images?.displayName}</h5>
                <p className="text-xs">{images?.email}</p>
              </div>
            </div>
            <FaRegHeart />
          </div>
          <div>
            <p className="mt-3">
              <span className="font-bold">Prompt</span>: {images?.prompt}
            </p>
            <p className="mt-4 py-2 px-4 border w-fit rounded-2xl border-white text-sm">{images?.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
