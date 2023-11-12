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
  /* padding-left: 10%;
  padding-right: 10%; */
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
    background-image: linear-gradient(30deg, #c0d9f9, #c7ecea, #cffddb);
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
    color: #FF8100 !important;
  }
  .MuiTabs-indicator{    
    background: #FF8100;
  }

  .MuiTab-textColorPrimary{
    color: #0C8E98;
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