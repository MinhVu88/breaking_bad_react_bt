import React from "react";

const Character = ({ character }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={character.img} alt="img" />
        </div>
        <div className="card-back">
          <h1>{character.name}</h1>
          <ul>
            <li>
              <strong>Actor: </strong>
              {character.portrayed}
            </li>
            <li>
              <strong>Nickname: </strong>
              {character.nickname}
            </li>
            <li>
              <strong>B-day: </strong>
              {character.birthday}
            </li>
            <li>
              <strong>Status: </strong>
              {character.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Character;
