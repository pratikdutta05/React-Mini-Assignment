import Header from "./component/Header";
import CarContainer from "./component/CarContainer";
import "./App.css";
import Footer from "./component/Footer";
import CarDetails from "./component/CarDetails";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="Container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />

          <Route path="/home" element={<CarContainer />} />

          <Route path="/home/electric_cars/:id" element={<CarDetails />} />

          <Route path="/home/electric_cars/" element={<CarContainer />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
