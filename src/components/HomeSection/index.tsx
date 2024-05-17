import { BodyContainer, Container } from "./style";
import logo from "../../assets/MainImage.png";
import ButtonContact from "../ButtonContact";

export default function HomeSection() {
  return (
    <>
      <BodyContainer id="zero">
        <Container>
          <ButtonContact />
        </Container>
      </BodyContainer>
    </>
  );
}
