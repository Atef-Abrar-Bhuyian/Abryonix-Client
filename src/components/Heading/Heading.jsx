import { Fade } from "react-awesome-reveal";

const Heading = ({ heading, paragraph }) => {
  return (
    <div>
      <Fade><h2 className="text-5xl font-bold text-pink-400">{heading}</h2></Fade>
      <p className="mt-4 text-lg text-gray-300">
        {paragraph}
      </p>
    </div>
  );
};

export default Heading;
