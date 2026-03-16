import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ServicesPage from "./pages/ServicesPage";

function App(){
  return(
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/services" element={<ServicesPage/>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App;