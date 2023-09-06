import DescImage from "../../layout/DescImage";
import Link from "../../layout/Link";
import DoubleVertical from "../../offsets/DoubleVertical";
import DescriptionFooter from "../DescriptionFooter";
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
                <GitHubLink link="https://github.com/Charlcharlo/roll-for-shoes" />
                <SiteLink link="https://roll-for-shoes.onrender.com/" />
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
              <h2 className="shoe-subtitle">Description</h2>
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
                site and prompts them to log in with an email and username or
                through their Google account using Oauth.
              </p>
              <DescImage
                src="R4S-Screenshots/Login.png"
                caption="Login screen."
              />
              <p className="paragraph">
                After the use is succefully logged in, the first thing they
                would see is a character collection page displaying their
                characters in card form. These cards contain a small bit of
                information about the character with an option to edit or view
                the sheet. The information for what characters to display is
                stored in an array of character IDs in the user&apos;s profile
                on the backend, and the characters are then accessed using the
                mongoose findById operation.
              </p>
              <DescImage
                src="R4S-Screenshots/Collection.png"
                caption="The character collection."
              />
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
              <DescImage
                src="R4S-Screenshots/Builder.png"
                caption="Character creation form."
              />
              <p className="paragraph">
                Because the whole ethos of Roll For Shoes is centered around the
                character evolving as the game, I wanted more than just a static
                page for the character sheet. I used JQuery along with Fetch to
                update the backend as players made changes in the game. Whenever
                the dice pool of a skill increased or a user needed to add a new
                skill or item, the frontend would access the backend and
                automatically make changes to the database. This meant that the
                backend had two parts to it; a router to render the various
                pages on the frontend and an API to handle Fetch requests
                whenever changes were made from the sheet itself.
              </p>
              <DescImage
                src="R4S-Screenshots/Sheet.png"
                caption="The character sheet."
              />
              <h2 className="shoe-subtitle">What I would do differently</h2>
              <p className="paragraph">
                If I were to build this site again, I would firstly use a
                frontend framework like React. The reason for this is that the
                finished EJS product is fairly sluggish as it has to make server
                requests any time a page is requested. Another reason is that
                DOM manipulation by hand using JQuery is not as straightforward
                as it is when using components with embedded Javascript. Another
                thing to note is that because this was my first project, there
                are bound to be a lot of performance and reliability errors in
                the code itself. I haven&apos;t revisited the project since
                creation besides updating information for hosting purposes, but
                I&apos;m sure that I would find a lot to change if I did.
              </p>
              <DescriptionFooter>
                <GitHubLink link="https://github.com/Charlcharlo/roll-for-shoes" />
                <SiteLink link="https://roll-for-shoes.onrender.com/" />
              </DescriptionFooter>
            </div>
          </div>
        </DoubleVertical>
      </div>
    </DescriptionWrapper>
  );
}
