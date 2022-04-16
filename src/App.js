import logo from "./logo.svg";
import "./App.css";
import Headercomponent from "./components/header";
import Footercomponent from "./components/footer";
function App() {
  return (
    <div className="container">
      <Headercomponent />
      <header className="header">
        <div>
          <p>MURALI</p>
        </div>
      </header>
      <div className="navigation">
        <div className="nav">
          <p>navigation...</p>
        </div>
        <div className="nav"></div>
        <div className="nav"></div>
        <div className="nav"></div>
      </div>
      <div className="content">
        <div className="cont about">
          <p>About</p>
        </div>
        <div className="cont qlink1">
          <p>Quick Links</p>
        </div>
        <div className="cont qlink2">
          <p>Quick Links</p>
        </div>
      </div>
      <Footercomponent />
    </div>
  );
}

export default App;
