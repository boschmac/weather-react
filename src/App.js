import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="webpage">
      <Weather defaultCity="Kingston" />
    </div>
    </div>
    </div>
  );
}

export default App;
