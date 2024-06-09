import { styled } from "styled-components";

export const BodyContainer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .Ponto {
    height: 50%;
    width: 50%;
    margin-right: 40px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  width: 100%;

  h1{
    font-size: 2em;
  }
  p{
    font-size: 1em;
    text-align: justify;
  }
`;
