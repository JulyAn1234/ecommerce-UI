import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutesLayout from "./components/layouts/ProtectedRoutesLayout";
import AuthRoutesLayout from "./components/layouts/AuthRoutesLayout";
import ProductCatalog from "./components/pages/ProductCatalog";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Auth */}
          <Route element={<AuthRoutesLayout />}>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Route>
          
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
