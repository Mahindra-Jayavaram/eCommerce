import './App.css';
import { Navbar } from "./Components/Navbar";
import { Mens } from "./Components/Mens"
import { AllRoutes } from "./Components/Routers/Routes"



function App() {
  return (
    <div className="App">
      <AllRoutes/>
        {/* <Navbar/> */}
        {/* <Mens/> */}
        {/* <h1>Mahindra Jayavaram</h1> */}
    </div>
  );
}

export default App;
