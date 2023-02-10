import "./App.css";
import About from "./components/about";
import Nav from "./components/nav";
import Gallery from "./components/gallery";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
