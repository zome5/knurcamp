import { Outlet, Link } from "react-router-dom";
import { MainPageTile } from "./MainPageTile";

const Layout = () => {
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
          <Link to="/algorytymy">
            <MainPageTile nazwa="algorytymy tydzień 1"></MainPageTile>
          </Link>

          <Link to="/zadankaTydzienTwo">
            <MainPageTile nazwa="zadanka tydzień 2"></MainPageTile>
          </Link>

          <Link to="/reactTydzienThree">
            <MainPageTile nazwa="react tydzień 3"></MainPageTile>
          </Link>

          <Link to="/krisReactTydzienThree">
            <MainPageTile nazwa="Kris react tydzień 3"></MainPageTile>
          </Link>
        </nav>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Layout;
