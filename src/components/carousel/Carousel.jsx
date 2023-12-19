import React, { useState, useEffect } from "react";
import "./carousel.css";

import caroselImage1 from "../../assets/carousel/carouselImage1.jpg";
import caroselImage2 from "../../assets/carousel/carImg2.jpg";

const Carousel = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselImages = [
    { src: caroselImage1, alt: "Image1" },
    { src: caroselImage2, alt: "Image2" },
    { src: caroselImage1, alt: "Image3" },
    { src: caroselImage2, alt: "Image4" },
    { src: caroselImage1, alt: "Image5" },
    { src: caroselImage1, alt: "Image5" },
    { src: caroselImage2, alt: "Image6" },
    { src: caroselImage1, alt: "Image7" },
    { src: caroselImage2, alt: "Image8" },
    { src: caroselImage1, alt: "Image9" },
    { src: caroselImage1, alt: "Image9" },
    { src: caroselImage2, alt: "Image10" },
    { src: caroselImage1, alt: "Image11" },
    { src: caroselImage2, alt: "Image12" },
    { src: caroselImage1, alt: "Image13" },
    { src: caroselImage1, alt: "Image13" },
    { src: caroselImage2, alt: "Image14" },
  ];

  const totalItems = carouselImages.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePaginationClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      // Set itemsPerPage based on screen width
      const newItemsPerPage = window.innerWidth <= 768 ? 2 : 4;
      setItemsPerPage(newItemsPerPage);
    };

    // Call handleResize on initial mount and on window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only on mount and unmount

  return (
    <div className="carousel-wrapper">
      <div className="carousel-items">
        {carouselImages
          .slice(activeIndex * itemsPerPage, (activeIndex + 1) * itemsPerPage)
          .map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image.src} alt={image.alt} className="carImage" />
            </div>
          ))}
      </div>
      <div className="carousel-pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-indicator ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handlePaginationClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === activeIndex}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
