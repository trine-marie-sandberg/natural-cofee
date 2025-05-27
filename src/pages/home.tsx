import styled from 'styled-components';
import Carousel from '../ui/caurosel';

const FrontImage = styled.div`
  height: 500px;
  width: auto;
  background-image: url("/front-img.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const HomeContainer = styled.div`
  color: white;
`;
function Home() {

  return (
    <HomeContainer>
      <FrontImage />
        <h1>Natural Coffee Café</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <Carousel />
    </HomeContainer>
  )
}

export default Home;
