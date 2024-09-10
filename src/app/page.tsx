//componentes
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import TitleHeader from "@/components/TitleHeader";
import { ProductBar } from "@/components/ProductBar";

const Home: React.FC = () => {
  const images = ["./Banner 1.png", "./Banner 2.png", "./Banner 3.png"];

  return (
    <>
      <div className="container">
        <main className="container mx-auto">
          <Hero />
        </main>
        <section className="container mt-10">
          <Featured>
            <TitleHeader title="Destacados" />
            <ProductBar></ProductBar>
          </Featured>
        </section>
      </div>
    </>
  );
};

export default Home;
