import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <RingLoader loading={true} size={30} color="#6b21a8" />
    </div>
  );
};

export default Loader;
