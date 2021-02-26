import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/header";
import Particles from "react-particles-js";

const App = () => {
  return (
    <div>
      <Particles
        className='particle-canvas'
        params={{
          particles: {
            number: {
              value: 50,
              density: { enable: true, value_area: 900 },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
