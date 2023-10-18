import { BodyContainer, Container } from "./style";
import ar from "../../assets/d403d33c12ea1b7131194ea0116461f21553544330-.jpg";

export default function Gameficacao() {
  return (
    <>
      <BodyContainer id="three">
        <img src={ar} className="Ponto" alt="logo" />
        <Container>
          <h1>Gameficação</h1>
          <p>
            O GoTour é um jogo para celular com propósito de tornar as
            experiências turísticas mais interativas e marcantes. Além de ser
            possível pesquisar pontos turísticos, o usuário poderá interagir com
            o ambiente através de tecnologia de realidade aumentada, explorando
            o ponto turístico dinamicamente, podendo encontrar recompensas
            exclusivas e descobrir curiosidades sobre o local e ainda colecionar
            lembranças de cada atração.
          </p>
          <p>
            O jogo incentivará as visitas através de missões de exploração com
            diversas recompensas, inclusive ganhando cupons de desconto para uso
            em estabelecimentos parceiros. O jogo começa ao chegar no local, o
            usuário inicia a missão onde, através de enigmas, terá que procurar
            os itens com a câmera do celular para descobrir mais sobre a
            história do lugar, tornando assim a experiência numa verdadeira caça
            ao tesouro.
          </p>
        </Container>
      </BodyContainer>
    </>
  );
}
