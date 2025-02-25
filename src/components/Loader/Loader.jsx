import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <RingLoader loading={true} size={30} color="#341539" />
    </div>
  );
};

export default Loader;
