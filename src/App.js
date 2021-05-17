import logo from "./jishologo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <Footer />
    </div>
  );
}

export default App;
