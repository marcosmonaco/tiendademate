"use client";
// React
import React, {useState, useEffect} from "react";

// NextUI
import {Button} from "@nextui-org/react";
import ProductSlider from "./ProductSlider";
import ProductHighlight from "./ProductHighlight";

export default function HomeScreen() {
  const images = [
    "https://www.cucinare.tv/wp-content/uploads/2021/11/Mate.jpg",
    "https://chasdomundo.pt/blog/wp-content/uploads/2023/08/erva-mate-chimarrao-terere-yerba-mate-chas-do-mundo.jpg",
    "https://www.guiaoleo.com.ar/wp-content/uploads/2024/03/bebidas-argentinas-1-1.jpeg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Con esto se cambia de Slides
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  // Opcionalmente, se pasa de slide cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-full">
      <div className="main-banner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-1000 ease-in-out w-full ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              className="main-banner object-cover "
              alt="Slide"
            />

            <Button
              size="sm"
              startContent={<p> &#10094;</p>}
              isIconOnly
              onClick={prevSlide}
              className="hidden xl:block absolute top-1/2 left-2 transform -translate-y-1/2 bg-primario-500 text-white px-2 py-1"
            />
            <div className="z-10 absolute top-7 left-4 xl:top-64 xl:left-56 flex flex-col gap-3">
              <h2 className="text-2xl xl:text-5xl text-blanco font-light">
                Desde 2024
              </h2>
              <h1 className="text-4xl xl:text-7xl text-blanco font-bold">
                CEBANDO TU MATE
              </h1>
              <p className="text-lg xl:text-xl text-blanco font-light">
                No hace falta experiencia para disfrutar de un buen mate.
              </p>
            </div>
            <Button
              size="sm"
              startContent={<p> &#10095;</p>}
              isIconOnly
              onClick={nextSlide}
              className="hidden xl:block absolute top-1/2 right-2 transform -translate-y-1/2 bg-primario-500 text-white px-2 py-1"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col px-4 xl:px-56">
        <ProductSlider />
      </div>
      <div className="flex flex-col">
        <ProductHighlight />
      </div>
    </div>
  );
}
