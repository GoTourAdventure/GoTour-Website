import React, { useState, useEffect } from "react";
import { Container } from "./style";
import Culture from "../../components/Culture";
import About from "../../components/About";
import Gameficacao from "../../components/Gameficacao";
import Turism from "../../components/Turism";
import PontoTuristico from "../../components/PontoTuristico";
import Empreendedores from "../../components/Empreendedores";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const viewport = window.innerHeight + window.innerHeight / 3;
      if (scrollY < window.innerHeight) {
        setValue("zero");
      } else if (scrollY < viewport) {
        setValue("one");
      } else if (scrollY < viewport* 2) {
        setValue("two");
      } else if (scrollY < viewport *3 ){
        setValue("three");
      } else {
        setValue("four");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <header className={`App-header`}>
        <Box sx={{ width: "100%" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab value="zero" label="Início" />
            <Tab value="one" label="Cultura" />
            <Tab value="two" label="O que é" />
            <Tab value="three" label="Gameficação" />
            <Tab value="four" label="Para quem é o GoTour?" />
          </Tabs>
        </Box>
      </header>
      <HomeSection />
      <Culture />
      <About />
      <Gameficacao />
      <h1 id={"four"}> Para quem é o GoTour?</h1>
      <Turism />
      <PontoTuristico />
      <Empreendedores />
    </Container>
  );
}
