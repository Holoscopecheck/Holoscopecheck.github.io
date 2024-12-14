import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ContentsList } from "./pages/ContentsList";
import { Article } from "./pages/Article";

export function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contents" element={<ContentsList />} />
      <Route path="/contents/:id" element={<Article />} />
    </Routes>
  );
}
