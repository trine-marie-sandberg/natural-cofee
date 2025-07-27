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
          </FlexWrap>
          <TextWrap>
            We are an ethical and enviromental friendly cafe with focus on high quality raw materials.
            Visit us in our new locales at ilumpstreet 17. Customer parking avaiable. 25% Student discount on black coffee. Open <i className="fa-solid fa-calendar"></i> mon-sunday <i className="fa-solid fa-clock"></i> 8-19
          </TextWrap>
        </div>
        <PrimBtn href="/menu"><i className="fa-solid fa-utensils"></i> Menu</PrimBtn>
      </HeadingWrap>
        <Carousel />
    </HomeContainer>
  )
}

export default Home;
