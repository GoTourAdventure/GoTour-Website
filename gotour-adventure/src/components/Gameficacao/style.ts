import { styled } from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  img{
    background-size: cover;
  }

  .Ponto {
    width: 45%;
    margin-right: 40px;
    margin-top: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
`;
