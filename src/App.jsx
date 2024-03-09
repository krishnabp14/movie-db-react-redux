import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/discover/:category" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
