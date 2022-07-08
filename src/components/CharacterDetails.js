import CharacterDetailsCard from "./CharacterDetailsCard"
import '../styles/layout/CharacterDetails.scss'

const CharacterDetails = (props) => {
    return(
        <>
        <div className="characterdetails">
        <img
          className="characterdetails__img"
          alt="character image"
          src={props.character.image}
        ></img>
        <ul className="characterdetails__mainInfo">
          <li className="characterdetails__mainInfo--title">
            {props.character.name}
          </li>
          <li className="characterdetails__mainInfo--status">
            {props.character.status}
          </li>
        </ul>
      </div>
      <CharacterDetailsCard character={props.character}/>
      </>
    )
}


export default CharacterDetails