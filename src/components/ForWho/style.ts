import { styled } from "styled-components";
import relogio from "../../assets/ForWhoItIs.png";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${relogio}) no-repeat center;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  
  width: 100%;

  h1 {
    font-size: 2em;
    padding: 0;
    color: black;
    text-align: center;
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
    font-size: 3em;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;  
  margin-top: 210px;  
  background: white;
  padding: 30px 20px;
  border: 2px solid rgba(255,255,255, 0.3);
  border-radius: 30px 30px 30px 30px;
  background: rgba(255, 255, 255, 0.9); /* Cor de fundo com transparência */
  backdrop-filter: blur(10px); /* Efeito de desfoque (ajuste o valor conforme desejado) */
`;
