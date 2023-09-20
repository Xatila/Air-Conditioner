import { useState, useEffect } from "react";
import "./ImageSlider.css";
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/Air-Conditioner/images/1.jpg", "/Air-Conditioner/images/2.jpg", "/Air-Conditioner/images/3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
