import { BodyContainer, Container, Content } from "./style";
import ar from "../../assets/LOGO PINCIPAL 2.svg";
export default function Footer() {
  return (
    <>
      <BodyContainer id="footer">
        <Container>
        <img src={ar} className="Ponto" alt="logo" />
          <Content>
            <p>&copy; {new Date().getFullYear()} GoTour Adventures. Todos os direitos reservados.</p>
            <p>Siga-nos nas redes sociais:</p>
            <div className="social-links">
              <a href="https://www.facebook.com/gotouradventures" target="_blank">Facebook</a> |
              <a href="https://www.twitter.com/gotouradventures" target="_blank">Twitter</a> |
              <a href="https://www.instagram.com/gotouradventures" target="_blank" >Instagram</a>
            </div>
            <p>
              Precisa de ajuda? Entre em contato conosco em: <a href="mailto:support@gotouradventures.com">support@gotouradventures.com</a>
            </p>
          </Content>
        </Container>
      </BodyContainer>
    </>
  );
}
