import React from "react";
import styled, {css} from "styled-components";

const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.Primary};
    color: ${theme.colors.PrimaryText};
  `}
`;

export const App = () => {
  return <Container>dadasda</Container>;
};
