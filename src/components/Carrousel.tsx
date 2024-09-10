"use client";
import { useState } from "react";

interface CarrouselProps {
  images: string[];
}

const Carrousel: React.FC<CarrouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1600px] mx-auto"> 
      <div className="relative overflow-hidden" style={{ height: "auto" }}> 
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full rounded-md"
        />
        <button
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black p-3 sm:p-4 rounded-full"
          onClick={prevSlide}
        >
          <i className="bx bx-chevron-left text-2xl sm:text-3xl"></i> 
        </button>
        <button
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black p-3 sm:p-4 rounded-full"
          onClick={nextSlide}
        >
          <i className="bx bx-chevron-right text-2xl sm:text-3xl"></i> 
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
