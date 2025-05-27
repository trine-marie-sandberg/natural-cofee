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
  background-color: rgb(36,24,24);
  color: rgb(233, 217, 187);
  font-size: 20px;
  padding: 10px 35px;
  border-top: 1px solid rgb(233, 217, 187);
  border-bottom: 1px solid rgb(233, 217, 187);
  border-left: 1px dashed rgb(233, 217, 187);
  border-right: 1px dashed rgb(233, 217, 187);
  border-radius: 25px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
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