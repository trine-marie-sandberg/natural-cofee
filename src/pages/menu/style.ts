import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

    > :nth-child(2) {
        background-color: #140B0E;
        color: #ffff;
    }
`;
export const SectionWrapper = styled.div`
  margin-bottom: 15px;
  padding: 5vw;
  background-color: #fff;
`;
export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 65px;
`;

export const MenuImagesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;
export const MenuImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
export const ImgTextWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  aspect-ratio: 1 / 1; /* ensures perfect square */
  border-radius: 15px;
  overflow: hidden;
  flex: 1 1 200px; /* responsive growth/shrink with min width */
`;
export const ImgText = styled.button`
  border: 1px solid rgb(20, 11, 14);
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  text-align: center;
  color: #fff;
  background-color: rgba(20, 11, 14, 0.44); /* same as #140b0e70 */
  transition: background-color 0.3s ease 0.1s;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: rgba(20, 11, 14, 0.06);
  }
`;
export const ResponsiveImage = styled.img`
  width: 100%;
  max-width: 250px;
  border-radius: 15px;
  border: 1px solid rgba(41, 41, 41, 1);
`;
export const MenuItemsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
`;