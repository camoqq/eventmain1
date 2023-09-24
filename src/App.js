import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Home from "./components/Home";
//import Selected from "./components/Selected";
import Context from "./context/Context";

const Home = lazy(() => import("./components/Home"));
const Selected = lazy(() => import("./components/Selected"));

function App() {
  return (
    // Routing of the 2 psges of the application

    <div>
      <Context>
        <BrowserRouter>
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/selected" element={<Selected />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
