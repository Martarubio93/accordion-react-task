import { useState } from "react";
import "../styles/layout/CollapsibleCharacter.scss";
import Button from "./Button";
import CharacterDetails from "./CharacterDetails";

const CollapsibleCharacter = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const character = props.character;

  const handleCollapsible = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`character ${isOpen ? "isOpen" : "isClose"}`}
      onClick={handleCollapsible}
    >
      <Button
        isOpen={isOpen}
        handleCollapsible={handleCollapsible}
        character={props.character}
      />
      <div className="character__body ">
        <CharacterDetails character={character} />
      </div>
    </div>
  );
};

export default CollapsibleCharacter;
