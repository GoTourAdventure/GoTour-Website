import { Container } from "../App/syle";
import logo from "../../assets/LOGO PINCIPAL 2.svg";
import ButtonContact from "../../components/ButtonContact";

export default function Home() {
  return (
    <Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonContact />
      </header>
    </Container>
  );
}
