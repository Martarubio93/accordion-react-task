import arrowpUp from "../images/angle-up-solid.svg";
import arrowDown from "../images/angle-down-solid.svg";
import "../styles/layout/Button.scss";


const Button = (props) => {

  const handleLocation = () => {
    if (props.character.location === "Earth (Replacement Dimension)") {
      return "Earth";
    } else {
      return props.character.location;
    }
  };
  
  return (
    <button className="character-header" onClick={props.handleCollapsible}>
      <input
        className="character-header__checkBox"
        type="checkbox"
        checked={props.isOpen ? true : false}
      ></input>
      <span className="character-header__item">{props.character.name}</span>
      <span className="character-header__item species">{props.character.species}</span>
      <span className="character-header__item">{handleLocation()}</span>
      <img
        className="character-header__arrow"
        src={props.isOpen ? arrowDown : arrowpUp}
      ></img>
    </button>
  );
};

export default Button;
