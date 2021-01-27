import "./style.css";
import Navbar from "../../components/Navbar";
import List from "../../components/List";
import { useState } from "react";

function App() {
  const [filteredStartups, setFilteredStartups] = useState("");

  function handleChange(inputValue) {
    setFilteredStartups(inputValue);
  }

  return (
    <div className="App">
      <Navbar handleCallback={handleChange} />
      <List filter={filteredStartups} />
    </div>
  );
}

export default App;
