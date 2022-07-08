import '../styles/layout/CharacterDetailsCard.scss'

const CharacterDetailsCard = (props) => {
    return (
        <div className="characterdetails-card">
        <h6 className="characterdetails-card__title"> USER DETAILS </h6>
        <section className="characterdetails-card__sectionList">
          <ul className="characterdetails-card__list">
            <li className="characterdetails-card__leftItem">Name</li>
            <li className="characterdetails-card__leftItem">Species</li>
            <li className="characterdetails-card__leftItem">Gender</li>
            <li className="characterdetails-card__leftItem">Location</li>
          </ul>
          <ul className="characterdetails-card__list">
            <li className="characterdetails-card__rightItem">
              {props.character.name}
            </li>
            <li className="characterdetails-card__rightItem">
              {props.character.species}
            </li>
            <li className="characterdetails-card__rightItem">
              {props.character.gender}
            </li>
            <li className="characterdetails-card__rightItem">
              {props.character.location}
            </li>
          </ul>
        </section>
      </div>
    )

}



export default CharacterDetailsCard