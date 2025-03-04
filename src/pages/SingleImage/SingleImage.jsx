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
  const { id: imageId } = useParams();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [images, setImages] = useState({});
  const [allComments, setAllComments] = useState([]);
  console.log(allComments);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axiosPublic.get(`/api/v1/image/singleImage/${imageId}`);
      setImages(res.data);
    };
    fetchImages();
  }, [axiosPublic, imageId]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axiosPublic.get(`/commentRoute/image/${imageId}`);
      setAllComments(res.data);
    };
    fetchComments();
  }, [axiosPublic, imageId]);

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

    if (!comment) return;

    // Construct the document
    const document = {
      prompt: images?.prompt,
      imageId,
      userEmail: user?.email,
      photoURL: user?.photoURL,
      comment,
    };

    // Send the comment to the backend
    axiosPublic.post(`/commentRoute/createComment`, document);
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
            <form
              onSubmit={handleSendComment}
              className="relative flex items-center"
            >
              <input
                name="comment"
                type="text"
                className="p-4 w-full rounded-md border-t-0 border-l-0 border-r-0 border-b-white border-2 pr-10 bg-transparent focus:outline-none"
                placeholder="Share your thoughts on this image..."
              />
              <LuSendHorizontal className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer" />
            </form>
          </div>
          {/* Comments */}
          {allComments.map((comment) => (
            <div key={comment?._id} className="flex flex-col mt-6">
              {/* User's Comment */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={
                      comment?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">
                    <span className="font-bold">
                      {comment?.userEmail || "Unknown User"}
                    </span>
                    <span className="text-gray-400 text-xs ml-2">
                      {new Date(comment?.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="mt-1 text-white text-sm">{comment?.comment}</p>
                </div>
              </div>

              {/* AI's Reply */}
              {comment?.reply && (
                <div className="ml-12 flex items-center gap-3 mt-1">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      alt="AI Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">
                      <span className="font-bold">AI</span>
                      <span className="text-gray-400 text-xs ml-2">
                        {new Date(comment?.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <p className="mt-1 text-white text-sm">{comment?.reply}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
