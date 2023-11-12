import { BodyContainer, Container, Content } from "./style";
import ar from "../../assets/LOGO PINCIPAL 2.svg";
import ButtonContact from "../ButtonContact";
export default function Footer() {
  return (
    <>
      <BodyContainer id="footer">
        <Container>
          <img src={ar} className="Ponto" alt="logo" />
          <Content>
            <p>
              Precisa de ajuda? Entre em contato conosco
            </p>
            <ButtonContact />
            <p>&copy; {new Date().getFullYear()} GoTour Adventures. Todos os direitos reservados.</p>
          </Content>
        </Container>
      </BodyContainer>
    </>
  );
}
