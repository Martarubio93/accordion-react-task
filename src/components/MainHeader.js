import "../styles/layout/MainHeader.scss";


const MainHeader = () => {
  
  return (
    <div className="mainHeaderList">
      <input
        className="mainHeaderList__checkBox"
        type="checkbox"
        checked={false}
      ></input>
      <span className="mainHeaderList__item">Name</span>
      <span className="mainHeaderList__item species">Species</span>
      <span className="mainHeaderList__item">Location</span>
    </div>
  );
};

export default MainHeader;
