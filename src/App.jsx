import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./Login.jsx";
import Products from "./Products.jsx";

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </BrowserRouter>
    );
}

export default App;