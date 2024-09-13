import HomeBackground from "./HomeBackground";
import Hero from "../Hero";
import CategoryBar from "../CategoryBar";
import { ProductBar } from "../ProductBar";
import HomeFeatures from "./HomeFeatures";

const HomeContainer = () => {
  const images = ["./Banner 1.png", "./Banner 2.png", "./Banner 3.png"];
  return (
    <div>
      <Hero />
      <CategoryBar />
      <ProductBar />
      <HomeFeatures />
    </div>
  );
};

export default HomeContainer;