import React from "react";
import "./App.css";

import Map from "./components/Map/Map";
import Search from "./components/Search/Search";
import Preview from "./components/Preview/Preview";
import Form from "./components/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CameraScreen from "./screen/CameraScreen";
import HomePage from "./screen/HomePage";
import Dashboard from "./screen/Dashboard";
import "antd/dist/reset.css";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar/Sidebar";

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
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar></Sidebar>
        <Layout>
          <Routes>
            <Route path="/" element={<MapScreen />}></Route>
            <Route path="/camera" element={<CameraScreen />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
