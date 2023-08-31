import Link from "../../layout/Link";
import DoubleVertical from "../../offsets/DoubleVertical";
import DescriptionWrapper from "../DescriptionWrapper";
import GitHubLink from "../Links/GitHubLink";
import SiteLink from "../Links/SiteLink";
import "./rollForShoes.css";

export default function RollForShoes() {
  return (
    <DescriptionWrapper id="roll4shoes-offset">
      <div className="purple-border">
        <DoubleVertical id="purple-border">
          <div className="description-body">
            <div className="shoes-header">
              <h1 className="shoe-title">Roll For Shoes</h1>
            </div>
            <div className="shoes-body">
              <div className="row-start desc-links">
                <GitHubLink />
                <SiteLink />
              </div>
              <h2 className="shoe-subtitle">About</h2>
              <p className="paragraph">
                As an avid tabletop roleplayer, one of the first things I was
                looking forward to creating was a character manager of some
                sort, and thus my first personal project was a character
                generator for the game Roll for Shoes. Roll For Shoes is a
                simple, open-source TTRPG thought up way back in 2010 on{" "}
                <Link href="https://web.archive.org/web/20200619145843/http://story-games.com/forums/discussion/11348/microdungeons-i-roll-to-see-if-i-have-shoes-on">
                  StoryGames
                </Link>{" "}
                by a user called Dweird. The rules for the game can be found{" "}
                <Link href="https://rollforshoes.com/">here</Link>, but in
                short, it is a game wherein you play a character starting with
                no skills and gain skills depending on how well you roll a
                six-sided die. Whenever you attempt to do anything within the
                game, you have to roll a six-sided die and aim to get a four or
                higher. If you roll a six on any roll, you get to add a die to
                your pool for any similar roll in the future, thus building a
                specialized character based solely on luck.
              </p>
              <h2 className="shoe-subtitle">Technical Description</h2>
              <p className="paragraph">
                For my app, I built a full-stack application using Node and
                Express on the backend and EJS on the front end with JQuery
                adding additional functionality. User and character data is
                stored in a MongoDB database and authentication is managed using
                OAuth and Passport. The front end consists of four page
                templates; the login screen, the character collection, the
                character builder and the character sheet itself. As this is a
                Node application using EJS, routing is handled by the backend
                and page templates are served based on parameters in the URL.
              </p>
              <p className="paragraph">
                The login screen is displayed when a user first accesses the
                site and prompts them to log in using Google or Facebook. If a
                user has visited the site before, cookies in the browser will
                take them directly to the character collection page where they
                can edit or view previously created characters or create a new
                character.
              </p>
              <p className="paragraph">
                The character creation and character editor pages both serve up
                the same form, with the difference being that the editor page is
                pre-populated with character data. The form consists of a series
                of text inputs for name, description, etc. as well as a section
                for editing skills and inventory. Because users can edit the
                number of skills and items possessed by their characters, I used
                JQuery to add and remove these inputs as needed. Using HTML
                array naming conventions, this data is then saved to a list on
                the backend.
              </p>
              <p className="paragraph">
                Because the whole ethos of Roll For Shoes is centered around the
                character evolving as the game, I wanted more than just a static
                page for the character sheet. I used JQuery along with Ajax to
                update the backend as players made changes in the game. Whenever
                the dice pool of a skill increased or a user needed to add a new
                skill or item, the frontend would access the backend and
                automatically make changes to the database. This meant that the
                backend had two parts to it; a router to render the various
                pages on the frontend and an API to handle AJAX requests
                whenever changes were made from the sheet itself.
              </p>
            </div>
          </div>
        </DoubleVertical>
      </div>
    </DescriptionWrapper>
  );
}
