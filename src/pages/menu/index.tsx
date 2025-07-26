import { MenuContainer, SectionWrapper, MenuImagesWrap, MenuImage, ImgTextWrap, ImgText, ResponsiveImage, MenuItemsWrap, Heading } from "./style";


function Menu() {

  return (
    <MenuContainer>
        <SectionWrapper>
          <div>
            <Heading><i className="fa-solid fa-utensils"></i> Menu</Heading>
            <MenuImagesWrap>
              <ImgTextWrap>
                <ImgText>Drinks</ImgText>
                <MenuImage src="coffee.png" />
              </ImgTextWrap>
              <ImgTextWrap>
                <ImgText>Food</ImgText>
                <MenuImage src="wrap.png" />
              </ImgTextWrap>
              <ImgTextWrap>
                <ImgText>Dessert</ImgText>
                <MenuImage src="cake.png" />
              </ImgTextWrap>
              <ImgTextWrap>
                <ImgText>Deals</ImgText>
                <MenuImage src="breakfast.png" />
              </ImgTextWrap>
            </MenuImagesWrap>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <div>
            <h2>Drinks</h2>
            <MenuItemsWrap>
            <div>
              <h3>Cofee</h3>
              <ResponsiveImage src="coffee.png" />
              <ul>
                <li>Expresso</li>
                <li>Americano</li>
                <li>Latte</li>
                <li>Mocca</li>
              </ul>
            </div>
            <div>
              <h3>Other drinks</h3>
              <ResponsiveImage src="juice.png" />
              <ul>
                <li>Expresso</li>
                <li>Americano</li>
                <li>Latte</li>
                <li>Mocca</li>
              </ul>
            </div>
            </MenuItemsWrap>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <div>
            <h2>Food</h2>
            <MenuItemsWrap>
              <div>
                <h3>Wraps</h3>
                <ResponsiveImage src="wrap.png" />
                <ul>
                  <li>Spicy chicken</li>
                  <li>Pulled beef</li>
                  <li>Pork and beef taco</li>
                  <li>Black been taco</li>
                  <li>Vegan</li>
                </ul>
              </div>
            </MenuItemsWrap>
          </div>
        </SectionWrapper>
    </MenuContainer>
  )
}

export default Menu;
