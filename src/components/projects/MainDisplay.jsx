import ProjectButtons from "./ProjectButtons";

export default function MainDisplay() {
  return (
    // <div className="project-collection">
    //   <div className="row-between">
    //     <button className="tab">
    //       <img src={`${window.location.origin}/images/Pokeball.png`} />
    //       <h2>A Very Simple Pokedex</h2>
    //     </button>
    //     <button className="tab">
    //       <img src={`${window.location.origin}/images/RollShoe.png`} />
    //       <h2>Roll for Shoes Character Creator</h2>
    //     </button>
    //     <button className="tab">
    //       <img src={`${window.location.origin}/images/AppBrewery.png`} />
    //       <h2>App Brewery Bootcamp Projects</h2>
    //     </button>
    //   </div>
    //   <div className="row-between">
    //     <button className="tab"></button>
    //     <button className="tab"></button>
    //     <button className="tab"></button>
    //   </div>
    // </div>
    <ProjectButtons />
  );
}
