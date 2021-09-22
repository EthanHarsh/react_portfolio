import React from "react";
import Button from "./components/ButtonStyled/index";
import NavBar from "./components/NavBar/index";

function App() {
  return (
    <main>
      <NavBar></NavBar>
      <Button.ButtonPrimary text="Hello" ></Button.ButtonPrimary>
      <Button.ButtonSecondary text="Hello" ></Button.ButtonSecondary>
    </main>

  )
}

export default App;
