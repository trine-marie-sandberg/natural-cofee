import { useState, useEffect, useRef } from 'react';
import { CarouselWrapper, Track, Slide, Dots, Dot, FlexWrap, Arrow } from './style';

const images = ['/carousel1.jpg', '/carousel2.jpg', '/carousel3.jpg'];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    startAutoSlide();
    return () => {
      // check that timerRef.current !null
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, [index]);

  const startAutoSlide = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
    }
    timerRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4000);
  };

  const goToPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <FlexWrap>
      <Arrow className="fa-solid fa-arrow-left" onClick={goToPrev} />
      
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
      
      <Arrow className="fa-solid fa-arrow-right" onClick={goToNext} />
    </FlexWrap>
  );
};

export default Carousel;
