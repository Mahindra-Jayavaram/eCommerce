import './App.css';
import { Payment } from "./Components/Payment"
import { AllRoutes } from "./Components/Routers/Routes"



function App() {
  return (
    <div className="App">
      <AllRoutes/>
        {/* <Navbar/> */}
        {/* <Mens/> */}
        {/* <h1>Mahindra Jayavaram</h1> */}
        <Payment/>
    </div>
  );
}

export default App;
