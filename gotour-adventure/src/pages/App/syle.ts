import { styled } from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
  max-width: 100%;
  background-image: linear-gradient(to right, #16a5c1, #479fa6, #0c8e98);
  scroll-behavior: smooth;
  padding-left: 2%;
  padding-right: 2%;

  h1{
    padding-top: 5%;
    font-size: 2em;
  }

  .App-logo {
    height: 50%;
    width: 50%;
  }

  .App-header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
