import { Route, Routes } from "react-router-dom"
import Mainpage from "./pages/main/mainpage"
import About from "./pages/about/about"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Mainpage /> } />
      <Route path="/about" element={<About/> } />
    </Routes>
  );
}

export default App;