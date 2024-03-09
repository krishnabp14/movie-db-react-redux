import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
