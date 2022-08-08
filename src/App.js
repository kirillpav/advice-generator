import React from "react";
import AdvideGenerator from "./Components/AdviceGenerator";
import Container from "./styles/Container";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <AdvideGenerator />
      </Container>
    </>
  );
}

export default App;
