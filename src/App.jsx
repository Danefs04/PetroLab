// Modules.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Pages.
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { ThinSectionPage } from "./pages/ThinSectionPage.jsx";
import { ThinSectionViewerPage } from "./pages/ThinSectionViewerPage.jsx";

// Components.
import { Header } from "./components/Header/Header.jsx";
import { ModalView } from "./components/ThinSection/ModalView";

// Functions.
export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/thinsections/*" element={<ThinSectionPage />}>
          <Route path="view/:id" element={<ModalView />} />
        </Route>

        <Route path="/tsviewer/:id" element={<ThinSectionViewerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
