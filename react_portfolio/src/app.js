import React from "react";
import InfoBox from "./components/InfoBox";
import NavBar from "./components/NavBar/index";




function App() {

  return (
    <main>
      <NavBar></NavBar>
      <InfoBox.RegBox></InfoBox.RegBox>
      <InfoBox.BlueBox></InfoBox.BlueBox>
      <InfoBox.BlueBoxOutline></InfoBox.BlueBoxOutline>
      <InfoBox.RedBox></InfoBox.RedBox>
      <InfoBox.RedBoxOutline></InfoBox.RedBoxOutline>      
    </main>
  )
}

export default App;
