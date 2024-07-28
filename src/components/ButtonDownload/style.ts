import styled from "styled-components";

export const ButtonBody = styled.div`
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    height: 50px;
    background: linear-gradient(45deg, #FFA64A, #FF8100);
    border-radius: 25px;
    border: none;
    padding: 0 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-decoration: none;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  .btn span {
    z-index: 1;
    font-family: "Courier New", Courier, monospace;
    font-weight: 600;
    font-size: 17px;
    text-align: center;
    color: #ffffff;
    transition: opacity 0.3s ease;
  }

  .btn .icon {
    margin-right: 10px;
    transition: transform 0.3s ease;
    color: white;
  }

  .btn:hover .icon {
    transform: translateX(-10px);
  }

  .btn:hover span {
    opacity: 0.8;
  }
`;

