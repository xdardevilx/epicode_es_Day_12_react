import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import musicFetch from "./data/get-fetch.API";
import Sidebar from "./components/side-bar";
import NavBarMain from "./components/nav-bar-main";
import { Container } from "react-bootstrap";
import PlayerComponent from "./components/player-component";
import MusicComponent from "./components/music-component";

function App() {
  musicFetch("The Beatles");

  return (
    <>
      <header>
        <Sidebar />
      </header>
      <main className="col-12 col-md-9 offset-md-3 mainPage text-center text-white ">
        <Container>
          <NavBarMain className="" />
          <div className="mt-5">
            <h2>Pop</h2>
            <MusicComponent query="pop" />
            <h2>Rap</h2>
            <MusicComponent query="rap" />
            <h2>Classic</h2>
            <MusicComponent query="classic" />
          </div>
        </Container>
      </main>
      <footer>
        <PlayerComponent />
      </footer>
    </>
  );
}

export default App;
