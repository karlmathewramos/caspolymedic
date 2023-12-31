import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Support from "./routes/Support";
import Navbar from "./components/Navbar";
import Direction from "./routes/Direction";
import Schedule from "./routes/Schedule";
// reference https://www.youtube.com/watch?v=0dOSLhPzSGI
export default function App() {
  return (
    <div className="App">
      <Routes>
        

        <Route path = "/" element = {<Home/>}/>
        <Route path = "/schedule" element = {<Schedule/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/service" element = {<Service/>}/>
        <Route path = "/direction" element = {<Direction/>}/>
        <Route path = "/support" element = {<Support/>}/>
      </Routes>
      
      
    </div>
  );
}