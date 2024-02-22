import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Algorytmy from "./components/Algorytmy.tsx";
import ZadankaTydzienTwo from "./components/ZadankaTydzienTwo.tsx";
import ReactTydzienThree from "./components/ReactTydzienThree.tsx";
import KrisReactTydzienThree from "./components/KrisReactTydzienThree.tsx";

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
