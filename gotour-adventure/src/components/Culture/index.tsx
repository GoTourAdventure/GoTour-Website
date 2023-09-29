import { BodyContainer, Container } from "./style";
import relogio from "../../assets/f04253344f963c8afe9b6d5432889098.jpg";

export default function Culture() {
  return (
    <>
      <BodyContainer>
        <Container>
          <h1>Cultura</h1>
          <p>
            A cultura desempenha um papel fundamental no turismo, enriquecendo a
            experiência dos viajantes. Quando visitamos novos lugares, somos
            apresentados a tradições, gastronomia, música e costumes locais.
            Essa diversidade cultural torna cada destino único e atrai viajantes
            em busca de novas experiências.
          </p>
          <p>Ao mergulhar na cultura local, os
            turistas têm a oportunidade de aprender, apreciar e respeitar
            diferentes modos de vida. Isso promove a compreensão mútua entre
            pessoas de diferentes origens e contribui para a construção de um
            mundo mais tolerante e inclusivo. Além disso, a cultura também
            impulsiona a economia do turismo, gerando empregos e promovendo o
            comércio local.</p>
            <p>
            Artesanato, festivais e eventos culturais são
            atrações populares que beneficiam as comunidades locais e
            proporcionam aos visitantes lembranças autênticas de suas viagens.
            Em resumo, a cultura desempenha um papel essencial no turismo,
            tornando cada viagem uma oportunidade de aprendizado, apreciação e
            conexão com o mundo ao nosso redor. Portanto, ao viajar, não deixe
            de explorar e respeitar a riqueza cultural dos destinos que visita.
            </p>
        </Container>
        <img src={relogio} className="Ponto" alt="logo" />
      </BodyContainer>
    </>
  );
}
