import styled from 'styled-components';

export const FrontImage = styled.div`
  height: 500px;
  width: auto;
  background-image: url("/front-img.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const HomeContainer = styled.div`
  color: white;
`;
export const PrimBtn = styled.button`
  background-color: rgb(36, 24, 24);
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  padding: 10px 45px;
  border-top: 1px solid rgba(233, 217, 187, 0.27);
  border-bottom: 1px solid rgba(233, 217, 187, 0.33);
  border-left: 1px dashed rgb(233, 217, 187);
  border-right: 1px dashed rgb(233, 217, 187);
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  &:hover {
    //color: rgb(233, 217, 187);
    background-color: rgb(46, 30, 30);
    //box-shadow: 0 0 8px rgba(233, 217, 187, 0.2), 0 0 20px rgba(233, 217, 187, 0.1);
  }

  // Shine effect
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: skewX(-25deg);
    transition: none;
  }

  &:hover::before {
    animation: shine 0.8s ease-out forwards;
  }

  @keyframes shine {
    0% {
      left: -75%;
    }
    100% {
      left: 125%;
    }
  }
`;

export const HeadingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const TextWrap = styled.p`
  max-width: 800px;
`;
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;