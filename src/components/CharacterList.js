import CollapsibleCharacter from "./CollapsibleCharacter";
import "../styles/layout/CharacterList.scss";

const CharacterList = (props) => {
  const renderList = () => {
    return props.dataFromApi.map((character, index) => {
      return (
        <li key={index} className="characterList__item">
          <CollapsibleCharacter
            className="tagCollapsibleCharacter"
            character={character}
          />
        </li>
      );
    });
  };

  return (
    <section>
      <ul className="CharacterList">{renderList()}</ul>
    </section>
  );
};

export default CharacterList;
