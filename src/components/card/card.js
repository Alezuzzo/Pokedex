import React from "react";
import { CardContainer, ImageContainer, NamePoke } from "./style";

function Card({ index, name }) {
  return (
    <CardContainer>
      <ImageContainer
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
          index + 1
        }.gif`}
      />
      <NamePoke>{name}</NamePoke>
    </CardContainer>
  );
}

export default Card;
