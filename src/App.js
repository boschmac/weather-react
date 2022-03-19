import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";
import WeeklyTemp from "./WeeklyTemp";


function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="webpage">
      <Weather />
     <WeeklyTemp />
    </div>
    </div>
    </div>
  );
}

export default App;
