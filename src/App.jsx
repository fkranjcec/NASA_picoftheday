/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { fetchNasaData } from "./actions";

function App() {

  const {nasaData, error} = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNasaData());
  }, []);

  if (error) {
    return <div>Could not load picture of the day... I am sorry...</div>;
  }

  if(!nasaData) {
    return <div>Loading data from NASA...</div>;
  }

  const { title, url, explanation } = nasaData;
  return (
      <div className="app">
          <h1>NASA - picture of the day</h1>
          <h3>{title}</h3>
          <img src={url} alt="NASA - picture of the day" width={500} />
          <p>{explanation}</p>
      </div>
  );
}

export default App;
