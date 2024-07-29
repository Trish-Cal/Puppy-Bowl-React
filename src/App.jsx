import Home from "../src/pages/home";
import Details from "../src/pages/details";
import AddPuppy from "./pages/AddPuppy";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/" element={<Details/>} />
    <Route path="/addPlayer" element={<AddPuppy />} />
    <Route path="*" element={<Home />} />
  </Routes>
  </>
  );
  
}

export default App
