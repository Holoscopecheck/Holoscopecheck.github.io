import "./App.css";
import { AppRoute } from "./AppRoutes";
import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <AppRoute />
      </Router>
    </>
  );
}
