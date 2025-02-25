import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <RingLoader loading={true} size={50} color="#A020F0" />
    </div>
  );
};

export default Loader;
