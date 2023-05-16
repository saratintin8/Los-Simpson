import Container from "./Components/Container";
import Header from "./Components/Header";
import styled from "styled-components";
import Welcome from "./Components/Welcome";


function App() {

  const reqApi = async () => {
    const api = await fetch('');
    const frase = await api.json();
    console.log(frase);
  }

  return (

    <Container>
      <Header />
      <Welcome />
    </Container>

  );
}
export default App; 
