import { BodyContainer, Container,Logo } from "./style";
import logo from "../../assets/LOGO PINCIPAL 2.svg";
import ButtonContact from "../ButtonContact";

export default function HomeSection() {
  return (
    <>
      <BodyContainer id="zero">
        <Container>
          <Logo src={logo} alt="Logo" className="logo" />
          <ButtonContact />
        </Container>
      </BodyContainer>
    </>
  );
}
