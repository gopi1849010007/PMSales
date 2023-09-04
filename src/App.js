import Header from "./components/Header";
import Hello from "./components/Hello";
import "./App.css";
import bulb from "./bulb.jpg";
export default function App() {
  var x = 6;
  function item(x) {
    return `I have ${x} apples`;
  }

  function Logo() {
    const picture = <img src={bulb} alt="bulbimage" />;
    return picture;
  }
  return (
    <div className="App">
      <Hello name="siddharth" job="IT Enterpreneur" />
      <p>{item(x)}</p>
      <p>{5 < x ? "Yes its sufficient" : "Some more fruits req"}</p>
      <Header />
      <Logo />
    </div>
  );
}
