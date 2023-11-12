import { BodyContainer, Container } from "./style";
import ar from "../../assets/touristicpoints.png";

export default function PontoTuristico() {
  return (
    <>
      <BodyContainer>
        <img src={ar} className="Ponto" alt="logo" />
        <Container>
          <h1>Pontos Turísticos</h1>
          <p>
            O GoTour é uma inovação no turismo, potencializando pontos turísticos com experiências interativas e educativas. Ele atrai e engaja visitantes com realidade aumentada e missões, tornando a visita mais envolvente, especialmente para o público jovem e tecnológico. O aplicativo enriquece o aprendizado cultural e histórico dos locais, ao mesmo tempo em que promove a preservação do patrimônio.
          </p>
          <p>
          Além disso, o GoTour é uma ferramenta eficaz de marketing, pois incentiva os usuários a compartilharem suas experiências nas redes sociais, atraindo mais visitantes. Ele também estimula a economia local, oferecendo recompensas e descontos em estabelecimentos próximos, e cria oportunidades para parcerias locais.
          </p>
          <p>
          A gestão de fluxo de visitantes é otimizada, encorajando a exploração de áreas menos conhecidas e reduzindo a superlotação. Cada experiência é personalizável, com avatares e lembranças digitais, garantindo uma visita única e memorável. Por fim, o GoTour promove um turismo mais sustentável, educando visitantes sobre a importância de preservar os pontos turísticos. Ele transforma cada visita em uma aventura cultural enriquecedora, tanto para os turistas quanto para os destinos.
          </p>
        </Container>
      </BodyContainer>
    </>
  );
}
