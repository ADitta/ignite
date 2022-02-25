// COMPONENTS AND PAGES
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
