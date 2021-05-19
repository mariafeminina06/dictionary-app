import logo from "./jishologo.jpg";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

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
