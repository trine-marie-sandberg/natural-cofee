import styled from 'styled-components';

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
        <h1>Home</h1>
    </HomeContainer>
  )
}

export default Home;
