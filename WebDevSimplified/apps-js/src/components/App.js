import React from "react";

import '../components/index.css'

import PokemonApp from "./pokemon-app/PokemonApp";
import InfiniteScroll from "./infinite-scrolling/InfiniteScroll";
import FlashcardQuiz from "./flashcard-quiz/FlashcardQuiz";

function App() {
  return (
    <div className="apps-grid">
      <FlashcardQuiz />
      <PokemonApp />
      <InfiniteScroll />
    </div>
  )
}

export default App;
