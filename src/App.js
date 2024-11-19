import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Mainpage } from "./pages/main/mainpage";
import About from "./pages/about/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
