import { Route, Routes } from "react-router-dom";
import TV1 from './components/TV1';
import TV2 from "./components/TV2";
import TV3 from "./components/TV3";
// import M3 from "./components/M3";
import QrCode from "./components/QrCode";

function App() {


  return (
    <>
      <Routes>
        {/* pasta */}
        <Route path="/" element={<TV1 />} />
        {/* wings, salad, sub, sides, pasata, wraps, desserts */}
        <Route path="/tvb" element={<TV2 />} />
        {/* strombolies, calazone, sandwich burger */}
        <Route path="/tvc" element={<TV3 />} />
        <Route path="/qr-code" element={<QrCode />} />
        {/* <Route path="/tv4" element={<M3 />} /> */}
      </Routes>

    </>
  );
}

export default App;
