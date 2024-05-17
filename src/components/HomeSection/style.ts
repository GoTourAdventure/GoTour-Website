import { styled } from "styled-components";
import Main from "../../assets/MainImage.png";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${Main}) no-repeat right;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  padding-top: 10%;
  padding-left: 2%;

  
`;
