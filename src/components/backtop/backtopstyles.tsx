import styled from 'styled-components';

export const Heading = styled.h1` 
  text-align: center; 
  color: green; 
`;

export const Content = styled.div` 
  overflow-y: scroll; 
  height: 2500px; 
`;

export const Button = styled.div` 
  position: fixed; 
  width: 100%; 
  left: 95%; 
  bottom: 40px; 
  height: 20px; 
  font-size: 3rem; 
  z-index: 1; 
  cursor: pointer; 
  color: green; 

  @media (max-width: 1200px) {
    left: 90%; 
    font-size: 2.5rem; 
  }

  @media (max-width: 768px) {
    left: 85%; 
    font-size: 2rem; 
  }

  @media (max-width: 480px) {
    left: 80%; 
    font-size: 1.5rem; 
  }
`;
