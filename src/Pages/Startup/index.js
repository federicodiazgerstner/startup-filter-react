import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../../data/startups.json";

function Startup() {
  const { name } = useParams();
  const [startupData, setStartupData] = useState({});

  useEffect(() => {
    const filteredStartup = data.find((startup) => {
      return startup.name.toLowerCase() == name.toLowerCase();
    });

    setStartupData(filteredStartup);
  }, []);

  return (
    <div>
      <h1>Nombre: {startupData.name}</h1>
      <h2>Description: {startupData.description}</h2>
    </div>
  );
}

export default Startup;
