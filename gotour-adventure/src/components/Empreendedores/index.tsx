import { BodyContainer, Container } from "./style";
import ar from "../../assets/enterpreneur.png";

export default function Empreendedores() {
  return (
    <>
      <BodyContainer id="seven">
        <Container>
          <h1>Empreendedores Locais</h1>
          <p>
            O GoTour oferece vantagens significativas para empreendedores locais, atuando como uma poderosa ferramenta de engajamento e marketing. Ao integrar recompensas e descontos em estabelecimentos locais, o aplicativo incentiva os turistas a explorarem mais do destino, incluindo restaurantes, lojas e atrações. Isso não só aumenta a visibilidade e o fluxo de clientes para os negócios locais, mas também promove a economia local.
          </p>
          <p>
            Além disso, ao criar parcerias com o GoTour, empreendedores podem se beneficiar da publicidade gerada pelas experiências compartilhadas dos usuários nas redes sociais. Isso proporciona uma divulgação orgânica e efetiva, alcançando um público mais amplo e diversificado. O GoTour, portanto, não apenas enriquece a experiência turística, mas também serve como um catalisador para o crescimento e prosperidade dos negócios locais.
          </p>
        </Container>
        <img src={ar} className="Ponto" alt="logo" />
      </BodyContainer>
    </>
  );
}
