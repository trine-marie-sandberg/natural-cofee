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
`;
export const Section2 = styled.div`
  color: #ffff;
`;
export const Section3 = styled.div`
  color: black;
`;

export const MenuImagesWrap = styled.div`
  background-color: #fff !important;
`;
export const MenuImage = styled.img`
  //background-image: url("coffee.png");
  height: 250px;
  width: 250px;
  border-radius: 15px;
`;
export const ImgTextWrap = styled.div`
  position: relative;
  width: fit-content;
`;
export const ImgText = styled.div`
  padding: 40% 0;
  margin: 0;
  position: absolute;
  font-size: 30px;
  text-align: center;
  color: #ffff;
  background-color: #140b0e70;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;