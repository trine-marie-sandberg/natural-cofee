import { MenuContainer, Section1, Section2, SectionWrapper } from "./style";


function Menu() {

  return (
    <MenuContainer>
        <SectionWrapper>
          <Section1>
            <h1>Menu section1</h1>
          </Section1>
        </SectionWrapper>
        <SectionWrapper>
          <Section2>
            <h2>Menu section2</h2>
          </Section2>
        </SectionWrapper>
    </MenuContainer>
  )
}

export default Menu;
