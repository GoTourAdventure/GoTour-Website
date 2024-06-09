import { styled } from "styled-components";
import ar from "../../assets/gamificationAR.png";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${ar}) no-repeat right;
  background-size: cover;

  @media (max-width: 400px) {
    height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  align-content: center;
  
  width: 100%;
  padding-right: 2%;

  h1 {
    font-size: 2em;
    padding: 0;
    color: black;
    text-align: left;
  }
  p {
    font-size: 1em;
    text-align: justify;
    color: black;
  }
  .Ponto {
    width: 40%;
  }

  .gotour-span{
    font-weight: bold;
    color: #16a5c1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-right: 40px;    
  background: white;
  padding: 0 60px 20px;
  border: 2px solid rgba(255,255,255, 0.3);
  border-radius: 0px 30px 30px 0px;
  background: rgba(255, 255, 255, 0.7); /* Cor de fundo com transparência */
  backdrop-filter: blur(10px); /* Efeito de desfoque (ajuste o valor conforme desejado) */
`;