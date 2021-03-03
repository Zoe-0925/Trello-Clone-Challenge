import './App.scss';
import Board from "./Components/Board/Board"

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <p className="navbar-title">Trello</p>
      </div>
      <div className="btn-tile"></div>
      <Board />
    </div>
  );
}

export default App;
