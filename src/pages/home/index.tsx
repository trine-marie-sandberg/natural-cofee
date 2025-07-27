import Carousel from '../../ui/caurosel';
import { FlexWrap, FrontImage, HeadingWrap, HomeContainer, PrimBtn, TextWrap } from './style';

function Home() {

  return (
    <HomeContainer>
      <FrontImage />
      <HeadingWrap>
        <div>
          <FlexWrap>
          <h1>Natural Coffee Café <i className="fa-solid fa-mug-saucer"></i></h1>
          <PrimBtn href="/menu"><i className="fa-solid fa-utensils"></i> Menu</PrimBtn>
          </FlexWrap>
          <TextWrap>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </TextWrap>
        </div>
      </HeadingWrap>
        <Carousel />
    </HomeContainer>
  )
}

export default Home;
