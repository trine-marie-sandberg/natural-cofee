import { useRef } from 'react';
import { MenuContainer, SectionWrapper, MenuImagesWrap, MenuImage, MenuBtn, ImgText, ResponsiveImage, MenuItemsWrap, Heading } from "./style";


function Menu() {

  const drinksRef = useRef<HTMLDivElement | null>(null);
  const foodRef = useRef<HTMLDivElement | null>(null);
  const dessertRef = useRef<HTMLDivElement | null>(null);
  const dealsRef = useRef<HTMLDivElement | null>(null);

  return (
    <MenuContainer>
        <SectionWrapper>
          <div>
            <Heading><i className="fa-solid fa-utensils"></i> Menu</Heading>
            <MenuImagesWrap>
              <MenuBtn 
                type="button"
                aria-label="Jump to drinks section"
                onClick={() => drinksRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ImgText>Drinks</ImgText>
                <MenuImage src="coffee.png" alt="Milk carefully poured into freshly made coffee, creating a heart pattern." />
              </MenuBtn>
              <MenuBtn 
                type="button"
                aria-label="Jump to food section"
                onClick={() => foodRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ImgText>Food</ImgText>
                <MenuImage src="wrap.png" alt="Wraps lying on a wooden surface, one tilted atop the other." />
              </MenuBtn>
              <MenuBtn 
                type="button"
                aria-label="Jump to desserts section"
                onClick={() => dessertRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ImgText>Dessert</ImgText>
                <MenuImage src="cake.png" alt="A chocolate cake with beautiful wavy pattern" />
              </MenuBtn>
              <MenuBtn 
                type="button"
                aria-label="Jump to deals section"
                onClick={() => dealsRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ImgText>Deals</ImgText>
                <MenuImage src="breakfast.png" alt="Coffee, toast, and a chocolate muffin placed on a wooden table." />
              </MenuBtn>
            </MenuImagesWrap>
          </div>
        </SectionWrapper>
        <SectionWrapper ref={drinksRef}>
          <div>
            <h2>Drinks</h2>
            <MenuItemsWrap>
              <div>
                <h3>Coffee & varm drinks</h3>
                <ResponsiveImage src="coffee.png" alt="Milk carefully poured into freshly made coffee, creating a heart pattern." />
                <ul>
                  <li>Expresso</li>
                  <li>Americano</li>
                  <li>Latte</li>
                  <li>Mocca</li>
                  <li>Hot chocolate</li>
                  <li>Apple and cinamon tea</li>
                  <li>Chai tea</li>
                </ul>
              </div>
              <div>
                <h3>Other drinks</h3>
                <ResponsiveImage src="soda.png" alt="Black soda with big ice cubes in a taal glass." />
                <ul>
                  <li>Lemonade</li>
                  <li>Apple juice</li>
                  <li>Pepsi</li>
                  <li>Pepsi max</li>
                </ul>
              </div>
            </MenuItemsWrap>
          </div>
        </SectionWrapper>
        <SectionWrapper ref={foodRef}>
          <div>
            <h2>Food</h2>
            <MenuItemsWrap>
              <div>
                <h3>Wraps</h3>
                <ResponsiveImage src="wrap.png" alt="Wraps lying on a wooden surface, one tilted atop the other." />
                <ul>
                  <li>Spicy chicken <i className="fa-solid fa-fire"></i> hot</li>
                  <li>Pulled beef</li>
                  <li>Pork and beef taco</li>
                  <li>Black been taco <i className="fa-solid fa-leaf"></i> vegan</li>
                </ul>
              </div>
              <div>
                <h3>Breakfast deal</h3>
                <ResponsiveImage src="breakfast.png" alt="Coffee, toast, and a chocolate muffin placed on a wooden table." />
                <ul>
                  <li>Chocolate muffin, coffee and toast $ 40</li>
                  <li>Just toast & coffee $ 35</li>
                </ul>
              </div>
              <div>
                <h3>Toasts and sandwich</h3>
                <ResponsiveImage src="sandwich.png" alt="Sandwich on a white plate." />
                <ul>
                  <li>Cheese and ham toast</li>
                  <li>Egg sandwich</li>
                  <li>Spicy chicken sandwich <i className="fa-solid fa-fire"></i> hot</li>
                  <li>Pulled beef sandwich</li>
                  <li>Avocado sandwich <i className="fa-solid fa-leaf"></i> vegan</li>
                  <li>Omph Sandwich <i className="fa-solid fa-leaf"></i> vegan</li>
                </ul>
              </div>
            </MenuItemsWrap>
          </div>
        </SectionWrapper>
        <SectionWrapper ref={dessertRef}>
          <div>
            <h2>Desserts</h2>
            <MenuItemsWrap>
              <div>
                <h3>Cake</h3>
                <ResponsiveImage src="cake.png" alt="A chocolate cake with beautiful wavy pattern" />
                <ul>
                  <li>Chocolate cake</li>
                  <li>Carrot cake</li>
                </ul>
              </div>
              <div>
                <h3>Cookies & Muffins</h3>
                <ResponsiveImage src="cakes.png" alt="Lots of fresh cookies, muffins and other cakes delicately placed next to each other." />
                <ul>
                  <li>Chocolate muffin</li>
                  <li>Chocolate cookie</li>
                  <li>Blueberry cookie <i className="fa-solid fa-leaf"></i> vegan</li>
                </ul>
              </div>
              <div>
                <h3>Sweets</h3>
                <ResponsiveImage src="macrones.png" alt="Pink, green, brown and beige macrons laying on top of each other." />
                <ul>
                  <li>Macrones</li>
                </ul>
              </div>
            </MenuItemsWrap>
          </div>
        </SectionWrapper>
        <SectionWrapper ref={dealsRef}>
          <div>
            <h2>Deals</h2>
            <MenuItemsWrap>
              <div>
                <h3>Breakfast</h3>
                <ResponsiveImage src="breakfast.png" alt="Coffee, toast, and a chocolate muffin placed on a wooden table." />
                <ul>
                  <li>Chocolate muffin, coffee and toast</li>
                </ul>
              </div>
              <div>
                <h3>Wrap tuesday</h3>
                <ResponsiveImage src="wrap.png" alt="Wraps lying on a wooden surface, one tilted atop the other." />
                <ul>
                  <li>All wraps $45 on tuesdays</li>
                </ul>
              </div>
            </MenuItemsWrap>
          </div>
        </SectionWrapper>
    </MenuContainer>
  )
}

export default Menu;
