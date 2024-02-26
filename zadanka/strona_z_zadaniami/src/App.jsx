import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import TydzienPierwszy from "./components/TydzienPierwszy.jsx";
import TydzienDrugi from "./components/TydzienDrugi.jsx";
import TydzienTrzeci from "./components/TydzienTrzeci.jsx";
import TydzienCzwarty from "./components/TydzienCzwarty.jsx";
import "./github-dark-dimmed.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="TydzienPierwszy" element={<TydzienPierwszy />}></Route>

          <Route path="tydziendrugi" element={<TydzienDrugi />}></Route>
          <Route path="tydzientrzeci" element={<TydzienTrzeci />}></Route>
          <Route path="tydzienczwarty" element={<TydzienCzwarty />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
