// src/components/Header.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    border-right: 150px solid transparent;
    border-top: 35px solid white;
  }
`;

const Lower = styled.div`
  background-color: #a7897d;

  padding: 2rem 1rem 3rem 1rem;
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
  list-style: none;
  & li {
    padding: 5px;
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
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
          </NavList>
        </nav>
      </LogoNavWrap>
  </Wrapper>
  <Lower>kkk</Lower>
</div>;

export default Header;
