import Header from "./component/Header";
import CarContainer from "./component/CarContainer";
import "./App.css";
import Footer from "./component/Footer";
import CarDetails from "./component/CarDetails";

function App() {
  return (
    <div className="Container">
      <Header />
      {/* <CarContainer /> */}
      <CarDetails />
      <Footer />
    </div>
  );
}

export default App;
