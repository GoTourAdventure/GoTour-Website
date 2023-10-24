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
  scroll-behavior: smooth;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 30px;
  font-size: calc(10px + 1vmin);
  color: #0C8E98;

  .homeSection{
    display: flex;
    height: 100%;
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    padding-top: 5%;
    font-size: 2em;
  }

  .App-logo {
    height: 50%;
    width: 50%;
  }

  .App-header {
    background-image: linear-gradient(to right, #16a5c1, #479fa6, #0c8e98);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;    
    z-index: 1000; 
    border-radius: 0 0 35px 35px;     
  }

  .App-link {
    color: #61dafb;
  }  

  .Mui-selected{
    font-weight: bold;
    color: #FFA64A !important;
  }
  .MuiTabs-indicator{    
    background: #FFA64A;
  }

  .MuiTab-textColorPrimary{
    color: black;
    font-weight: bold;
  }

  .MuiTab-textColorSecondary{
    color: pink;
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