import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles.css";
import Menu from "./components/Menu";
import Checkout from "./components/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
