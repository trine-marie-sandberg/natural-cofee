import { useState, useEffect } from 'react';
import { CarouselWrapper, Track, Slide, Dots, Dot } from './style';

const images = ['/carousel1.jpg', '/carousel2.jpg', '/carousel3.jpg'];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <CarouselWrapper>
      <Track currentIndex={index}>
        {images.map((src, i) => (
          <Slide key={i} isActive={i === index}>
            <img src={src} alt={`Carousel ${i + 1}`} />
          </Slide>
        ))}
      </Track>
      <Dots>
        {images.map((_, i) => (
          <Dot key={i} onClick={() => setIndex(i)} active={i === index} />
        ))}
      </Dots>
    </CarouselWrapper>
  );
};

export default Carousel;
