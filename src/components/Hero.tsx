import CategoryBar from "@/components/CategoryBar";
import Carrousel from "@/components/Carrousel";

export const Hero = () => {
  const images = ["/Banner 1.png", "/Banner 2.png", "/Banner 3.png"];

  return (
    <div className="hero mx-auto w-full">
      <Carrousel images={images} />
      <CategoryBar />
    </div>
  );
};

export default Hero;
