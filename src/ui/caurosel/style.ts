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
  border-radius: 50%;
  border: none;
  background-color: ${({ active }) => (active ? '#140B0E' : '#ccc')};
  cursor: pointer;
`;