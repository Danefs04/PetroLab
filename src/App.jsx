// Modules.
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages.
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { ThinSectionViewerPage } from "./pages/ThinSectionViewerPage.jsx";

// Components.
import { Navbar } from "./components/navbar/Navbar.jsx";

// Functions.
export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/TSViewer/:id" element={<ThinSectionViewerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
