import styled from 'styled-components';
import Footer from "../footer";
import Header from '../header';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgba(41, 40, 40, 0);
`;

const Main = styled.main`
  flex: 1;
  background-color: rgb(31, 13, 6);
  background-color: #140B0E;
`;

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
