import "./FreeSolar.css";
import DescriptionWrapper from "../DescriptionWrapper";
import SiteLink from "../Links/SiteLink";
import Link from "../../layout/Link";
import GitHub from "../../Icons/GitHub";
import DescriptionFooter from "../DescriptionFooter";
import DescImage from "../../layout/DescImage";

export default function FreeSolar() {
  return (
    <DescriptionWrapper id="free-solar">
      <div className="solar-header">
        <h1 className="solar-title">
          Freesolar<span>ZA</span>
        </h1>
        <div className="row-start desc-links">
          <a
            className="desc-link row-between"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Charlcharlo/free-solar-site"
          >
            <p>Main Site Repo</p>
            <GitHub />
          </a>
          <a
            className="desc-link row-between"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Charlcharlo/freesolar-text-editor"
          >
            <p>Editor Repo</p>
            <GitHub />
          </a>
          <SiteLink link="https://freesolarza.co.za/" />
        </div>
        <div className="fade" />
      </div>
      <div className="solar-body">
        <h2 className="solar-subtitle">About</h2>
        <p className="paragraph">
          FreeSolarZA is a company providing affordable solar power to
          lower-income households. They hired me to design and build a website
          that would house their product offerings, contact details and general
          information about solar panels for those interested in going down that
          route. Much of what was done on the site was built with SEO in mind,
          and so it was important that the website content was fully updateable
          by the company, including the displayed content as well as meta
          information. So along with this hosted website, I also built an
          offline editor so that content could be edited without hassle.
        </p>
        <DescImage src="solar-home.png" caption="The homepage editor." />
        <p className="paragraph">
          The website itself is a fairly static page containing information
          about the company as well as a{" "}
          <Link href="https://freesolarza.co.za/products">products page</Link>{" "}
          and a{" "}
          <Link href={"https://freesolarza.co.za/knowledge-base"}>
            repository of useful information
          </Link>{" "}
          about solar power conversion. The products section of the website was
          designed to be more of a catalog than an online shop as the nature of
          the business revolves around customized products based on the space
          and existing infrastructure. Thus each product links to a custom
          contact form wherein the customer can enquire about the availability
          of their desired product and ask further questions about the
          evaluation and installation process.
        </p>
        <h2 className="solar-subtitle">How data is stored and edited</h2>
        <p className="paragraph">
          We wanted the website to be as simple and secure as possible, so we
          opted to build a pure frontend application in React without needing to
          worry about maintaining a database service and running into any
          unforeseen complications. In order to achieve this, I opted to use
          static JSON files hosted on the site&apos;s server itself to store the
          owner&apos;s changes to the site.The text editor mentioned above is
          used to generate and edit these JSON files, which are then uploaded
          directly to the server along with associated images. We opted to use
          this method so that we could keep the editing of data offline rather
          than accessing the server via an API and thus cut down on the number
          of entry points to the site and limit security risks as much as
          possible.
        </p>
        <p className="paragraph">
          In order to access the data, a simple fetch was used to convert the
          JSON files into Javascript objects which were then rendered into the
          page and styled accordingly. The editor was similarly built in React
          but with an Express JS backend which would write files to the
          project&apos;s main folder so that they could be moved onto the server
          when needed. The editor accesses the site&apos;s public directory to
          load and preview images used in articles and product descriptions. It
          also has the capability of editing text on the site’s home page as
          well as meta descriptions and keywords. This was achieved using{" "}
          <Link href="https://www.npmjs.com/package/react-helmet">
            React Helmet
          </Link>{" "}
          on the front end.
        </p>
        <p className="paragraph">
          If you would like to view the editor, please click{" "}
          <Link href="https://github.com/Charlcharlo/freesolar-text-editor">
            here
          </Link>{" "}
          for a GitHub repo containing the editor’s code complete with mock data
          and instructions on how to run it locally.
        </p>
        <DescriptionFooter>
          <a
            className="desc-link row-between"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Charlcharlo/free-solar-site"
          >
            <p>Main Site Repo</p>
            <GitHub />
          </a>
          <a
            className="desc-link row-between"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Charlcharlo/freesolar-text-editor"
          >
            <p>Editor Repo</p>
            <GitHub />
          </a>
          <SiteLink link="https://freesolarza.co.za/" />
        </DescriptionFooter>
      </div>
    </DescriptionWrapper>
  );
}
