import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
          <Route index element={<Home />} />
          {/* <Route path='/details/:id' element={<CardDetails />} /> */}
        </Routes>
    </>
  );
}

export default App;
