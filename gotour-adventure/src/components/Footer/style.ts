import { styled } from "styled-components";
import relogio from "../../assets/culture.png";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  background: #45474B;  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
    text-align: center;
    color: black;
  }
  .Ponto {
    width: 20%;
  }

  .gotour-span{
    font-weight: bold;
    color: #16a5c1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;    
  padding: 0 60px 20px;
  border: 2px solid rgba(255,255,255, 0.3);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.7); Cor de fundo com transparência
  .social-links {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    
    a {
      margin: 0 10px;
      color: #16a5c1;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
