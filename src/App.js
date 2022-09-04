import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./App.css";

// API URL
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getTours() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function removeTour(id) {
    const newTours = tours.filter((t) => t.id !== id);
    setTours(newTours);
  }

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      {tours.length === 0 ? (
        <div className="title">
          <h2>no tours</h2>
          <button className="btn" onClick={getTours}>
            Refresh
          </button>
        </div>
      ) : (
        <Tours list={tours} removeTour={removeTour} />
      )}
    </main>
  );
}

export default App;
