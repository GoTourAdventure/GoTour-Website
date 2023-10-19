import React from "react";
import { Container } from "../App/syle";
import Culture from "../../components/Culture";
import About from "../../components/About";
import Gameficacao from "../../components/Gameficacao";
import Turism from "../../components/Turism";
import PontoTuristico from "../../components/PontoTuristico";
import Empreendedores from "../../components/Empreendedores";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { useState, useEffect } from 'react';
import HomeSection from "../../components/HomeSection";

export default function Home() {
  const [value, setValue] = useState("zero");  

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    scrollToSection(newValue);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container id="zero">
      <header className={`App-header`}>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}            
            centered
          >
            <Tab value="zero" label="Início" />
            <Tab value="one" label="Cultura" />
            <Tab value="two" label="O que é" />
            <Tab value="three" label="Gameficação" />
            <Tab value="four" label="Para quem é o GoTour?" />
            <Tab value="five" label="Turistas" />
            <Tab value="six" label="Pontos Turísticos" />
            <Tab value="seven" label="Empreendedores Locais" />
          </Tabs>
        </Box>
      </header>
      <HomeSection/>
      <Culture />
      <About />
      <Gameficacao />
      <h1 id="four">Para quem é o GoTour?</h1>
      <Turism />
      <PontoTuristico />
      <Empreendedores />
    </Container>
  );
}