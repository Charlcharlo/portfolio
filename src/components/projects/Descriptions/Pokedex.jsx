import DescriptionWrapper from "../DescriptionWrapper";
import GitHubLink from "../Links/GitHubLink";
import SiteLink from "../Links/SiteLink";
import "./pokedex.css";

export default function Pokedex() {
  return (
    <DescriptionWrapper id="pokedex-wrapper">
      <div className="description-body dex-body">
        <div className="dex-title-block row-start">
          <div>
            <h2 className="bit-title">A Very Simple</h2>
            <h1 className="poke-title">Pokédex</h1>
          </div>
          <div className="ball-holder">
            <div className="outer-ball">
              <div className="inner-ball" />
            </div>
          </div>
        </div>
        <div className="row-start desc-links">
          <GitHubLink />
          <SiteLink link="https://verysimplepokedex.netlify.app/" />
        </div>
        <div className="desc-main-body">
          <h2 className="bit-title">About</h2>
          <p className="paragraph">
            For my first React project, I wanted to test my ability to work with
            an external database and so created a simple Pokédex using
            Pokéapi.co. The beating heart of this app is a trie data structure
            to store and search through Pokémon names and render them into an
            autocompleting list as the user typed in the search bar. Pokémon
            data is then rendered into a simple template displaying flavor text
            entries, in-game stats as well as links to other forms of the
            Pokémon and any other Pokémon in their evolution tree.
          </p>
          <div className="desc-img-group">
            <img
              src={`${window.location.origin}/portfolio/images/dex-example.png`}
              alt=""
            />
            <figcaption>An example Pokédex entry.</figcaption>
          </div>
          <h2 className="bit-title">Technical Description</h2>
          <p className="paragraph">
            The first thing that happens when you load this page is that the app
            makes a get request to the API to get a full list of all Pokémon
            currently in existence. This is then sorted into a trie data
            structure in order to provide faster searching for the autocomplete.
            Trie is short for retrieval and this is what this data structure
            does. It all starts with the root node which has a number of null
            children called nodes based on your alphabet size. When a string is
            sorted into the trie, each character in the string is assigned to
            its respective node, which is then also given the same null children
            as the root. This process is repeated recursively until you have
            reached the end of the string and it is in this node that the data
            is stored.
          </p>
          <p className="paragraph">
            The benefit of this data structure compared to an array is that the
            search algorithm doesn’t have to search the entire list to find the
            data it’s looking for. The list returned from Pokeapi is sorted by
            dex number, so if for example you were searching for the Pokemon
            Mew, you would have to search through 151 entries in the list before
            you found it. In a trie, you would only have to go three levels deep
            as that is the length of the string, “Mew”. This is an incredible
            amount of time saved, especially considering that the autocomplete
            nature of this app requires it to search the list every time the
            value of the search bar changes.
          </p>
          <p className="paragraph">
            One of the immediate challenges I faced here is that the API stores
            names in kebab case if there is more than one word. This meant that
            I needed to use Lodash to parse the names into what they call start
            case (capitalize the first letter of each word), but I ran into
            problems with Pokémon whose names had hyphens in them, such as Ho-Oh
            and Kommo-o. I solved this by running each name against several
            lists of different types of hyphenation and capitalisation before
            inserting them into the trie. Thankfully there are only a handful of
            situations where this is the case, but if Gamefreak ever releases a
            generation of Pokémon where all the names are hyphenated, this could
            add some performance issues to my application. Lodash is also used
            to parse the input data into kebab case in order to interface with
            the trie.
          </p>
          <p className="paragraph">
            From there the rendering of data was fairly straightforward. All I
            had to do was fetch the Pokémon I needed using the URL provided by
            the API and render the information I needed into my application. As
            the name suggests, this pokedex is very simple and only displays
            stats, evolutions, forms and pokedex descriptions. It would be nice
            to one day go back and add moves and abilities to the display, but
            then it may not be a very simple Pokédex anymore.
          </p>
          <h2 className="bit-title">What I would do differently</h2>
          <p className="paragraph">
            If I were to build this application again, I wouldn’t build the trie
            on the front end every time a user visits the page as this uses a
            lot of storage space on the client side. Instead, I would build the
            trie on the backend and simply send the finished product to the
            client whenever a user visited the page. This trie would have to be
            updated regularly, however, as the API is consistently being worked
            on and Pokémon games are still coming out to this day.
          </p>
        </div>
      </div>
    </DescriptionWrapper>
  );
}
