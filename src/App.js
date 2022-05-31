import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import CategoryPage from "./page/CategoryPage";
import AddProductPage from "./page/AddProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Categories" element={<CategoryPage />} />
      <Route path="/AddProduct" element={<AddProductPage />} />
    </Routes>
  );
}

export default App;
