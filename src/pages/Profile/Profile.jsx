import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth(); 
  const axiosPublic = useAxiosPublic();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axiosPublic.get(`/api/v1/image/userImages/${user?.email}`);
        setImages(res.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    if (user?.email) {
      fetchImages();
    }
  }, [axiosPublic, user?.email]);

  return (
    <div className="pt-12 lg:pt-20 flex flex-col md:flex-row min-h-screen text-white bg-gradient-to-t from-black via-[#250038] to-black">
      <div className="grid grid-cols-12 gap-6 ">
        {/* Left Side: User Info */}
        <div className="col-span-3  p-6 rounded-lg shadow-md " >
          <div className="flex flex-col items-center">
            <img
              src={user?.photoURL }
              alt="User Profile"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h1 className="text-3xl font-semibold text-gray-800 text-white">{user?.displayName}</h1>
            <p className="text-sm text-white">{user?.email}</p>
          </div>
        </div>

        {/* Right Side: Generated Images */}
        <div className="col-span-9 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">Generated Images</h2>
          <div className="grid grid-cols-3 gap-6">
            {images.length === 0 ? (
              <p className="col-span-full text-center text-white">No images generated yet.</p>
            ) : (
              images.map((image) => (
                <div key={image?._id} className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src={image?.original_image}
                    alt="Generated"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
