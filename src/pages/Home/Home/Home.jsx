import HeroBanner from "../HeroBanner/HeroBanner";
import Features from "../Features/Features";
import GeneratedImages from "../GeneratedImages/GeneratedImages";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Features></Features>
      {/* <Pricing></Pricing> */}
      <GeneratedImages></GeneratedImages>

    </div>
  );
};

export default Home;
