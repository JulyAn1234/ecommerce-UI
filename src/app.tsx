import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutesLayout from "./components/layouts/ProtectedRoutesLayout";
import ProductCatalog from "./components/pages/ProductCatalog";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Auth */}
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          
          {/* Protected */}
          <Route element={<ProtectedRoutesLayout />}>
            <Route path="/" element={<ProductCatalog />} />
          </Route>

          {/* Default */}
          <Route path="*" element={<h1>404 Default</h1>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
