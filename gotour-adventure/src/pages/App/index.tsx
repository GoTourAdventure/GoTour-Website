import React from "react";
import { Container } from "../App/syle";
import logo from "../../assets/LOGO PINCIPAL 2.svg";
import ButtonContact from "../../components/ButtonContact";
import Culture from "../../components/Culture";
import About from "../../components/About";
import Gameficacao from "../../components/Gameficacao";
import Turism from "../../components/Turism";
import PontoTuristico from "../../components/PontoTuristico";
import Empreendedores from "../../components/Empreendedores";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function Home() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container>
      <header className="App-header">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="secondary tabs example"
            centered
          >
            <Tab value="one" label="Cultura" />
            <Tab value="two" label="O que é" />
            <Tab value="three" label="Gameficação" />
            <Tab value="four" label="Para quem é o GoTour?" />
            <Tab value="five" label="Turistas" />
            <Tab value="six" label="Pontos Turísticos" />
            <Tab value="seven" label="Empreendedores Locais" />
          </Tabs>
        </Box>
        <img src={logo} className="App-logo " alt="logo" />
        <ButtonContact />
        <Culture />
        <About />
        <Gameficacao />
        <h1>Para quem é o GoTour?</h1>
        <Turism />
        <PontoTuristico />
        <Empreendedores />
      </header>
    </Container>
  );
}
