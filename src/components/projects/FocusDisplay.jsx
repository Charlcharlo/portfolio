export default function FocusDisplay() {
  return (
    <div className="project-collection">
      <div className="row-between small-nav">
        <button className="tab">
          <img src={`${window.location.origin}/images/Pokeball.png`} />
        </button>
        <button className="tab">
          <img src={`${window.location.origin}/images/RollShoe.png`} />
        </button>
        <button className="tab">
          <img src={`${window.location.origin}/images/AppBrewery.png`} />
        </button>
        <button className="tab"></button>
        <button className="tab"></button>
        <button className="tab"></button>
      </div>
    </div>
  );
}
