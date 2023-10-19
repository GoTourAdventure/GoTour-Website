import { styled } from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  width: 100%;
  padding-right: 2%;

  h1{
    font-size: 2em;
  }
  p{
    font-size: 1em;
    text-align: justify;
  }
  .Ponto {
    
    width: 40%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-right: 40px;
`
