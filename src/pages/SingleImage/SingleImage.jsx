import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router";
import { FaRegCopy, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LuSendHorizontal } from "react-icons/lu";
import useAuth from "../../hooks/useAuth";

const SingleImage = () => {
  const imageId = useParams();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [images, setImages] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axiosPublic.get(`/api/v1/image/singleImage/${id}`);
      setImages(res.data);
    };
    fetchImages();
  }, [axiosPublic, id]);

  const handleCopy = () => {
    toast.success("Prompt copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSendComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value.trim();
    
    if (!comment) return; // Prevent empty comments
    
    console.log(comment);
    
    // Construct the document
    const document = {
      prompt: images?.prompt,
      imageId,
      userEmail: user?.email,
      photoURL: user?.photoURL,
      comment,
    };
  
    // Send the comment to the backend
    axiosPublic.post(`/commentRoute/createComment`, document)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error("Error posting comment:", err));
  
    // Reset input field after submitting
    e.target.reset();
  };
  

  return (
    <div className="mt-16 container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 p-2">
          <img
            className="rounded-xl"
            src={images?.original_image}
            alt="AI Generated Photo"
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
            <p className="mt-3 text-justify">
              <span className="font-bold">Prompt</span>: {images?.prompt}
            </p>
            <div className="flex gap-3">
              <CopyToClipboard text={images?.prompt || ""} onCopy={handleCopy}>
                <button className="btn mt-4 py-2 px-4 border w-fit rounded-2xl border-white text-sm flex items-center justify-center gap-2">
                  Copy This Prompt <FaRegCopy className="text-lg" />
                </button>
              </CopyToClipboard>
              <p className="mt-4 py-2 px-4 border w-fit rounded-2xl border-white text-sm flex items-center justify-center">
                {images?.category}
              </p>
              <p className="mt-4 py-2 px-4 border w-fit rounded-2xl border-white text-sm flex items-center justify-center">
                Fast
              </p>
            </div>
          </div>
          <div className="mt-6">
            <form onSubmit={handleSendComment} className="relative flex items-center">
              <input
                name="comment"
                type="text"
                className="p-4 w-full rounded-md border-t-0 border-l-0 border-r-0 border-b-white border-2 pr-10 bg-transparent focus:outline-none"
                placeholder="Comment Here"
              />
              <LuSendHorizontal className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
