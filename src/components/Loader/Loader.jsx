import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <PacmanLoader loading={true} size={30} color="#A020F0" />
    </div>
  );
};

export default Loader;
