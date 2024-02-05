import Home from "./pages/Home.js";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/subscriber' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
