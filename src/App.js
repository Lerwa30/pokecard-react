import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import CardDetails from "./components/Cards/CardDetails";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/details/:id' element={<CardDetails />} />
        </Routes>
    </>
  );
}

export default App;
