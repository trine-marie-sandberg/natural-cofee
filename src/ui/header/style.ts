import styled from 'styled-components';

export const Wrapper = styled.header`
background-color: #ffffff;
  color: black;
  padding: 1rem;
  width: 100%;
  
  /* Optional shadow for visual layering */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 1;
    width: 0;
    height: 0;

    /* Triangle pointing down-right */
    border-left: 0 solid transparent;
    border-right: 200px solid transparent;
    border-top: 30px solid white;
  }
`;

export const Lower = styled.div`
  background-color: #a7897d;
  background-color: #140B0E;
  max-height: 30px;
  padding: 1px;
`;
export const LowerText = styled.div`
  padding: 3px;
  margin-left: 50%;
  color: white;
  & p {
    padding: 0;
    margin: 0;
    font-size: 15px;
  }
`;
export const Logo = styled.p`
  font-family: "Satisfy", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
`;
export const LogoNavWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const NavList = styled.ul`
  display: flex;
  list-style: georgian;
  list-style: armenian;
  /* list-style-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='5,0 10,5 5,10 0,5' fill='%23140B0E' stroke='%23898484' stroke-width='1'/%3E%3C/svg%3E"); */
  list-style-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='8,0 16,8 8,16 0,8' fill='%23140B0E' stroke='%23898484' stroke-width='1'/%3E%3C/svg%3E");

  & li {
    padding: 5px;
    margin-left: 50px;
    font-size: 20px;
    & a.active {
      border-bottom: 1px solid black;
    }
  }
`;