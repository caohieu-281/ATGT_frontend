import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Search from "./components/Search/Search";
import Preview from "./components/Preview/Preview";
import Form from "./components/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CameraScreen from "./screen/CameraScreen";
function MapScreen() {
  return (
    <>
      <main>
        <Search />
        <Map />
        <Preview />
        <Form />
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/" element={<MapScreen />}></Route>
        <Route path="/camera" element={<CameraScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
