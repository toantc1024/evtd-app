import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/CenterWrap/Intro";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Intro />
    </Fragment>
  );
}

export default App;
