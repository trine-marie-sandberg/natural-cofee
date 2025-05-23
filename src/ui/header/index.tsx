import { NavLink } from 'react-router-dom';
import { Wrapper, Lower, LowerText, Logo, LogoNavWrap, NavList } from './style';

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
