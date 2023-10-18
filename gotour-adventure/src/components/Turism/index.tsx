import { BodyContainer, Container } from "./style";
import ar from "../../assets/ICON PERSON WALK.svg";

export default function Turism() {
  return (
    <>
      <BodyContainer id="five">
        <Container>
          <h1>Turistas</h1>
          <p>
            Ao usar o GoTour durante sua viagem, você se torna o protagonista de
            uma aventura única. Imagine explorar pontos turísticos icônicos
            através da realidade aumentada, desvendando segredos e curiosidades
            escondidos atrás de cada esquina. Você não está apenas visitando um
            local, está vivendo uma verdadeira caça ao tesouro, onde cada
            descoberta é uma recompensa em si mesma.
          </p>
          <p>
            E não para por aí. O GoTour eleva a experiência a um novo patamar,
            oferecendo missões de exploração que não apenas enriquecem seu
            conhecimento sobre o destino, mas também recompensam você com
            descontos exclusivos em estabelecimentos locais. Imagine ganhar
            cupons de desconto para restaurantes, lojas e outras atrações
            enquanto desfruta de sua aventura turística. Isso não apenas torna
            sua viagem mais acessível, mas também incentiva a exploração
            contínua durante todo o ano, não apenas em épocas de festividades.
          </p>
        </Container>
        <img src={ar} className="Ponto" alt="logo" />
      </BodyContainer>
    </>
  );
}
