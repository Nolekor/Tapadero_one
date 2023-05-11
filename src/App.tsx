import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
