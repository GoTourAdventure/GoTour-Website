import { BodyContainer, Container } from "./style";
import logo from "../../assets/LOGO PRINCIPAL 1.svg";

export default function About() {
  return (
    <>
      <BodyContainer id="two">
        <img src={logo} className="Ponto" alt="logo" />
        <Container >
          <h1>O que é</h1>
          <p>
            O GoTour é um aplicativo mobile com propósito de tornar as
            experiências turísticas mais interativas e marcantes, foi idealizado
            para além de ser possível pesquisar pontos turísticos, interagir com
            o ambiente através de tecnologia de realidade aumentada, encontrar
            recompensas exclusivas, descobrir curiosidades dos locais,
            colecionar lembranças de cada atração, realizar missões de visita e
            exploração, customizar seu avatar com diversos itens, comprar itens
            na loja e compartilhar suas conquistas com amigos.
          </p>
          <p>
            O jogo começa ao chegar no local, o usuário inicia a missão onde,
            através de enigmas, terá que procurar os itens com a câmera do
            celular para descobrir mais sobre a história do lugar, tornando
            assim a experiência numa verdadeira caça ao tesouro. Ao finalizar a
            missão o jogador ganhará lembranças do ponto turístico e moedas de
            ouro que podem ser trocadas por itens para personalizar o avatar ou
            itens que ajudam nas missões.
          </p>
        </Container>
      </BodyContainer>
    </>
  );
}
