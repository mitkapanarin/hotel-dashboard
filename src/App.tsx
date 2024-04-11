import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import NotFound from "./components/NotFound";
import Details from "./components/Details";
import Create from "./components/Create";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/hotels/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Card />} />
      </Routes>
    </div>
  );
};

export default App;
