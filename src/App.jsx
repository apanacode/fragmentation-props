import "bootstrap/dist/css/bootstrap.min.css";

import OutdoorGames from "./components/OutdoorGames";
import ErrorPage from "./components/ErrorPage";
function App() {
  let games = ["cricket", "football", "scoccers", "baseball"];
  games = [];

  return (
    <>
      <h3>PLAYZONE GAMES OUTDOOR GAMES </h3>
      <ErrorPage outgames={games}></ErrorPage>
      <OutdoorGames outgames={games}></OutdoorGames>
    </>
  );
}

export default App;
