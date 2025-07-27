import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  overflow: hidden;
  margin: 2rem auto;
`;
export const Track = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${({ currentIndex }) => `-${currentIndex * 100}%`});
`;
export const Slide = styled.div<{ isActive: boolean }>`
  flex: 0 0 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: ${({ isActive }) => (isActive ? 'none' : 'blur(5px) brightness(0.8)')};
  transform: ${({ isActive }) => (isActive ? 'scale(1)' : 'scale(0.9)')};
  transition: all 0.4s ease;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 1rem;
  }
`;
export const Dots = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;
export const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: 1px solid rgb(233, 217, 187);
  background-color: ${({ active }) => (active ? '#140B0E' : 'rgb(233, 217, 187)')};
  cursor: pointer;
`;

export const FlexWrap = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  max-width: fit-content;
  padding: 5px;
`;

export const ArrowWrapper = styled.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(10px, 2vw, 15px);
  margin: 15px;
  border-radius: 100%;
  border: 1px solid rgb(233, 217, 187);
  border-right-style: dashed;
  border-left-style: dashed;
  transition: transform 0.6s ease, border 0.6s ease;

  &:hover {
    transform: rotate(360deg);
  }
`;
export const Arrow = styled.i`
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  color: rgb(233, 217, 187);
  transition: transform 0.6s ease;
  
  // Reverse rotation
  ${ArrowWrapper}:hover & {
    transform: rotate(-360deg);
  }
`;