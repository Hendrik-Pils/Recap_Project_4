import "./App.css";
import Form from "./components/Form/Form.js";
import List from "./components/List/List.js";
import { React } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";
import { uid } from "uid";

function App() {
  const [weather, setWeather] = useState([]);
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  useEffect(() => {
    async function loadWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
    }

    loadWeather();
  }, []);

  function handleAddActivity(activityData) {
    const newActivity = activityData;
    console.log(activityData);
    setActivities([...activities, newActivity]);
    activityData.id = uid();
  }

  return (
    <>
      <h1>
        {weather.temperature} {weather.condition}
      </h1>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
