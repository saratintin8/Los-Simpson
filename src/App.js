import Container from "./Components/Container";
import Header from "./Components/Header";
//import styled from "styled-components";
import Welcome from "./Components/Welcome";
import CharactersContainer from "./Components/CharactersContainer";
import { useState } from "react";

function App() {
  const [character, setCharacter] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=3');
    const frase = await api.json();
    setCharacter(frase);
  };

  return (

    <Container>
      <Header />
      {!character ? (
        <Welcome reqApi={reqApi} />
      ) : (
        <CharactersContainer character={character} reqApi={reqApi} />
      )};

    </Container>

  );
}
export default App; 
