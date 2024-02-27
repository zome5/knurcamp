import { Outlet, Link } from "react-router-dom";
import { MainPageTile } from "./small_components/MainPageTile";

const Layout = () => {
  const handlaExpandClick = (e) => {
    e.target.parentElement.classList.toggle("expand-full-screen");
  };

  return (
    <>
      <header>
        <h1>
          <a href="https://www.twitch.tv/fvlvte">
            <span className="blue-font">KNURCAMP </span>
          </a>
          EDYCJA 1
        </h1>
        <h2>
          uczestnik:
          <a href="https://github.com/zome5">
            <span className="blue-font"> postmahone</span>
          </a>
        </h2>
      </header>
      <main>
        <nav>
          <Link to="/tydzienpierwszy">
            <MainPageTile nazwa="Tydzień 1"></MainPageTile>
          </Link>

          <Link to="/tydziendrugi">
            <MainPageTile nazwa="Tydzień 2"></MainPageTile>
          </Link>

          <Link to="/tydzientrzeci">
            <MainPageTile nazwa="Tydzień 3: React"></MainPageTile>
          </Link>

          <Link to="/tydzienczwarty">
            <MainPageTile nazwa="Tydzień 4: Kris React"></MainPageTile>
          </Link>
        </nav>
        <section>
          <i className="fa-solid fa-expand" onClick={handlaExpandClick}></i>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Layout;
