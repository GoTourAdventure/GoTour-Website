import { BodyContainer, Container, Logo } from "./style";
import logo from "../../assets/LOGO PINCIPAL 2.svg";
import ButtonContact from "../ButtonContact";
import ButtonDownload from "../ButtonDownload";

export default function HomeSection() {
  return (
    <>
      <BodyContainer id="zero">
        <Container>
          <Logo src={logo} alt="Logo" className="logo" />
          <ButtonDownload />
          <ButtonContact />
        </Container>
      </BodyContainer>
    </>
  );
}
