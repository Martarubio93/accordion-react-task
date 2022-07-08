import '../styles/layout/Main.scss'
import MainHeader from "./MainHeader";
import CharacterList from "./CharacterList"


const Main = (props) => {
  return (
    <main>
      <div className="Main">
        <MainHeader/>
        <CharacterList dataFromApi={props.dataFromApi}/>
      </div>
    </main>
  );
};

export default Main;
