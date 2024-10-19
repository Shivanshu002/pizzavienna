import { Route, Routes } from "react-router-dom";
import TV1 from './components/TV1';
import TV2 from "./components/TV2";
import TV3 from "./components/TV3";
// import M3 from "./components/M3";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const intervalId = setInterval(() => {
      window.location.reload();
    }, 300000); // 60000 milliseconds = 1 minute
    return () => {
      // Cleanup the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Routes>
        {/* pasta */}
        <Route path="/tv1" element={<TV1 />} />
        {/* wings, salad, sub, sides, pasata, wraps, desserts */}
        <Route path="/tv2" element={<TV2 />} />
        {/* strombolies, calazone, sandwich burger */}
        <Route path="/tv3" element={<TV3 />} />
        {/* <Route path="/tv4" element={<M3 />} /> */}
      </Routes>

    </>
  );
}

export default App;
