import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Algorytmy from "./components/Algorytmy.jsx";
import ZadankaTydzienTwo from "./components/ZadankaTydzienTwo.jsx";
import ReactTydzienThree from "./components/ReactTydzienThree.jsx";
import KrisReactTydzienThree from "./components/KrisReactTydzienThree.jsx";
import "./github-dark-dimmed.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="algorytymy" element={<Algorytmy />}></Route>
          <Route
            path="zadankaTydzienTwo"
            element={<ZadankaTydzienTwo />}
          ></Route>

          <Route
            path="zadankaTydzienTwo"
            element={<ZadankaTydzienTwo />}
          ></Route>
          <Route
            path="reactTydzienThree"
            element={<ReactTydzienThree />}
          ></Route>
          <Route
            path="krisReactTydzienThree"
            element={<KrisReactTydzienThree />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
