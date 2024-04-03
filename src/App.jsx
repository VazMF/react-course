import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {
  function handleClick() {
    console.log("I'm clicking");
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={handleClick}>Components</TabButton>
            <TabButton onClick={handleClick}>JSX</TabButton>
            <TabButton onClick={handleClick}>Props</TabButton>
            <TabButton onClick={handleClick}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
