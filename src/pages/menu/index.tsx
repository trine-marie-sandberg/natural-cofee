import { MenuContainer, Section1, Section2, SectionWrapper, Section3, MenuImagesWrap, MenuImage, ImgTextWrap, ImgText } from "./style";


function Menu() {

  return (
    <MenuContainer>
        <SectionWrapper>
          <Section1>
            <h1><i className="fa-solid fa-utensils"></i> Menu</h1>
            <MenuImagesWrap>
              <ImgTextWrap>
                <ImgText>Drinks</ImgText>
                <MenuImage src="coffee.png" />
              </ImgTextWrap>
            </MenuImagesWrap>
          </Section1>
        </SectionWrapper>
        <SectionWrapper>
          <Section2>
            <h2>Drinks</h2>
          </Section2>
        </SectionWrapper>
        <SectionWrapper>
          <Section3>
            <h2>Food</h2>
          </Section3>
        </SectionWrapper>
    </MenuContainer>
  )
}

export default Menu;
