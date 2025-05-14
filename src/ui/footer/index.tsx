// src/components/Footer.tsx
import styled from 'styled-components';

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  text-align: center;
  padding: 1rem;
  width: 100%;
`;

const Footer = () => <Wrapper>&copy; {new Date().getFullYear()} Natural Coffee</Wrapper>;

export default Footer;
