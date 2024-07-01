import { BrowserRouter, Routes } from "react-router-dom";

export default function AppRoutes(params) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
