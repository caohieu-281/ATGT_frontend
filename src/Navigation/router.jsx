import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapScreen from "../screen/MapScreen";
import Header from "../components/Header";
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MapScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
