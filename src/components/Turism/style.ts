import { styled } from "styled-components";
import ar from "../../assets/Turista.png";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  .Ponto {
    height: 50%;
    width: 50%;    
  }  

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 10px;
    flex-direction: column-reverse;

    .Ponto{
      border-radius: 50%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  padding: 30px;

  h1{
    font-size: 2em;
  }
  p{
    font-size: 1em;
    text-align: justify;
  }
`;
