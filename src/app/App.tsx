import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

import MainRouting from "../pages/MainRouting";

import "./App.css";

function App() {
  const { state, fetchData } = useGlobalContext();

  useEffect(() => {
    fetchData();
    console.log("CURRENT CONTEXT ON LOOK PAGE: ", state);
  }, []);

  return <MainRouting />;
}

export default App;
