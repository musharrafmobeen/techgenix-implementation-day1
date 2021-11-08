import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Partners from "./components/Partners";
import ServicesCards from "./components/ServicesCards";

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <section>
        <Home />
      </section>
      <section>
        <ServicesCards />
      </section>
      <section>
        <Partners />
      </section>
      <section>
        <div className="internal-div">four</div>
      </section>
      <section>
        <div className="internal-div">five</div>
      </section>
    </div>
  );
}

export default App;
