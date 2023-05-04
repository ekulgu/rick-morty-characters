import React from "react";
import CharacterList from "./CharacterList";
import { StylesProvider } from "@material-ui/core/styles";

function App() {
  return (
    <StylesProvider injectFirst>
      <CharacterList />
    </StylesProvider>
  );
}

export default App;
