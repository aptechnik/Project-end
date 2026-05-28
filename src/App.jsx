import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import IndexPage from "./pages/index";
import AboutPage from "./pages/about";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
