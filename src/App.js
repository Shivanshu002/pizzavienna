import { Route, Routes } from "react-router-dom";
import TV1 from './components/TV1';
import TV2 from "./components/TV2";
import TV3 from "./components/TV3";
// import M3 from "./components/M3";
import { useEffect } from "react";

function App() {

  
  return (
    <>
      <Routes>
        {/* pasta */}
        <Route path="/" element={<TV1 />} />
        {/* wings, salad, sub, sides, pasata, wraps, desserts */}
        <Route path="/tv-b" element={<TV2 />} />
        {/* strombolies, calazone, sandwich burger */}
        <Route path="/tv-c" element={<TV3 />} />
        {/* <Route path="/tv4" element={<M3 />} /> */}
      </Routes>

    </>
  );
}

export default App;
