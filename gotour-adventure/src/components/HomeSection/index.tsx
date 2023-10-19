import { BodyContainer, Container } from "./style";
import logo from "../../assets/LOGO PINCIPAL 2.svg";
import ButtonContact from "../ButtonContact";

export default function HomeSection() {
  return (
    <>
      <BodyContainer>
        <Container>
          <img src={logo} className="App-logo" alt="logo" />
          <ButtonContact />
        </Container>
      </BodyContainer>
    </>
  );
}
