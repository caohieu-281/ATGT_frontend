import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapScreen from "../screen/MapScreen";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
