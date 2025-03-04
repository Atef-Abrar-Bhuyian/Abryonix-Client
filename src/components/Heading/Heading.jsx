import { Fade } from "react-awesome-reveal";

const Heading = ({ heading, paragraph }) => {
  return (
    <div className="text-center">
      <Fade>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-700 to-violet-800 bg-clip-text text-transparent">
          {heading}
        </h2>
      </Fade>
      <p className="mt-4 text-lg text-gray-300">{paragraph}</p>
    </div>
  );
};

export default Heading;
