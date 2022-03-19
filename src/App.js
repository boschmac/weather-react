import logo from './logo.svg';
import './App.css';
import Form from "./Search";
import CurrentTemp from "./CurrentTemp";
import WeeklyTemp from "./WeeklyTemp";


function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="webpage">
      <Form />
    <CurrentTemp />
    <WeeklyTemp />
    </div>
    </div>
    </div>
  );
}

export default App;
