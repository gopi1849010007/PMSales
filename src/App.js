import Header from "./components/Header";
import Hello from "./components/Hello";
import "./App.css";
import Card from "./components/Card.js";
import BTN from "./components/BTN.js";

export default function App() {
  var x = Number(prompt("Number of fruits"));
  function item(x) {
    return `I have ${x} apples`;
  }

  return (
    <div className="App">
      <Hello name="siddharth" job="IT Enterpreneur" />
      <p>{item(x)}</p>
      <p>{5 < x ? "Yes its sufficient" : "Some more fruits req"}</p>
      <Header />
      <Card h2="Enjoy the fruits" h3="Be healthy" />

      <BTN />
    </div>
  );
}
