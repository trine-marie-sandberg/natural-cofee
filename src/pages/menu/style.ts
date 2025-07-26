import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

    & :nth-child(2) {
        background-color: #140B0E;
    }
`;
export const SectionWrapper = styled.div`
  margin-bottom: 15px;
  padding: 5vw;
  background-color: #fff;
`;
export const Section1 = styled.div`
  color: black;
  
  & h1 {
    text-align: center;
  }
`;
export const Section2 = styled.div`
  color: #ffff;
`;
export const Section3 = styled.div`
  color: black;
`;

export const MenuImagesWrap = styled.div`
  background-color: #fff !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const MenuImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
export const ImgTextWrap = styled.div`
  position: relative;
    width: 250px;
    height: 250px;
    border-radius: 15px;
    overflow: hidden;
`;
export const ImgText = styled.button`
  border: 3px solid rgb(20, 11, 14);
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
  transition: background-color 0.3s ease 0.2s;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: rgba(20, 11, 14, 0.06);
  }
`;