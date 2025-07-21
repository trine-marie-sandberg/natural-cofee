import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SectionWrapper = styled.div`
  margin-bottom: 15px;

  & :nth-child(2) {
  background-color: pink;
}
`;
export const Section1 = styled.div`
  color: black;
  background-color: #fff;
`;
export const Section2 = styled.div`
  color: #ffff;
`;