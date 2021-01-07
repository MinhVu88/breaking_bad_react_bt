import React from "react";
import Character from "./Character";
import Spinner from "../ui/Spinner";

function CastGrid({ characters, isLoading }) {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {characters.map(char => {
        return <Character key={char.char_id} character={char} />;
      })}
    </section>
  );
}

export default CastGrid;
