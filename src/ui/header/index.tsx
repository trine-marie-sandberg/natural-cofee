import { NavLink } from 'react-router-dom';
import { Wrapper, Lower, Logo, LogoNavWrap, NavList } from './style';

const Header = () => 
  <div>
    <Wrapper>
      <LogoNavWrap>
        <div>
          <Logo>Natural Coffee</Logo>
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
    {/* <LowerText>
      <p><i className="fa-solid fa-location-dot"></i> Loren ipsumstreat 21, 1212 Dolor</p>
    </LowerText> */}
  </Lower>
</div>;

export default Header;
