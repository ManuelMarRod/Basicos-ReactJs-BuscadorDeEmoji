import { useState } from "react";
import SearchInput from "./SearchInput";
import EmojiResult from "./EmojiResult";
import filterEmoji from "../logic/filterEmoji";
import "./App.css";

function App() {

    const[state, setState] = useState({
      filteredEmoji: filterEmoji("",5)
    });

    const handleSearchChange = event =>{
      setState({
        filteredEmoji: filterEmoji(event.target.value, 10)
      })}

  return (
    <div>
      <header className="component-header">Buscador de Emojis</header>
      <SearchInput textChange={handleSearchChange} />
      <EmojiResult emojiData={state.filteredEmoji} />
    </div>
  );
}

export default App;
