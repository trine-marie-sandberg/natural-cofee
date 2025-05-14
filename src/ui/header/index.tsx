// src/components/Header.tsx
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.header`
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

const Lower = styled.div`
  background-color: #a7897d;
  max-height: 30px;
  padding: 1px;
`;
const LowerText = styled.div`
  padding: 3px;
  margin-left: 15%;
  color: white;
  & p {
    padding: 0;
    margin: 0;
    font-size: 15px;
  }
`;
const Logo = styled.p`
  font-size: 25px;
`;
const LogoNavWrap = styled.div`
  display: flex;
  align-items: center;
`;
const NavList = styled.ul`
  display: flex;
  list-style: georgian;
  list-style: armenian;
  list-style-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='5,0 10,5 5,10 0,5' fill='%23a0522d'/%3E%3C/svg%3E");
  & li {
    padding: 5px;
    margin-left: 50px;
    & a.active {
      border-bottom: 1px solid black;
    }
  }
`;

const Header = () => 
  <div>
    <Wrapper>
      <LogoNavWrap>
        <div>
          <Logo>Natural Cofee</Logo>
        </div>
        <nav>
          <NavList>
            <li>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
          </NavList>
        </nav>
      </LogoNavWrap>
  </Wrapper>
  <Lower>
    <LowerText>
      <p>Loren ipsumstreat 21, 1212 Dolor</p>
    </LowerText>
  </Lower>
</div>;

export default Header;
