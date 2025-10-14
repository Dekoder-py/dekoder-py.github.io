import { Routes, Route, Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import MySetup from "./pages/MySetup";
import NotFound from "./pages/NotFound";
import "./Style.css";

function App() {
  return (
    <>
      <nav className="p-4 bg-latte-mantle dark:bg-macchiato-mantle underline">
        <Link
          className="mr-4 hover:text-macchiato-blue dark:hover:text-macchiato-blue"
          to="/"
        >
          Home
        </Link>
        <Link
          className="mr-4 hover:text-blue-600 dark:hover:text-blue-400"
          to="/about"
        >
          About
        </Link>
        <Link
          className="mr-4 hover:text-blue-600 dark:hover:text-blue-400"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="mr-4 hover:text-blue-600 dark:hover:text-blue-400"
          to="/my-setup"
        >
          My Setup
        </Link>
        <Link
          className="mr-4 hover:text-blue-600 dark:hover:text-blue-400"
          to="https://kyle-b.is-a.dev"
        >
          Blog
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/my-setup" element={<MySetup />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="items-center justify-center text-center text-latte-text dark:text-macchiato-text p-10 bg-latte-mantle dark:bg-macchiato-mantle">
        Made in 2025 by Dekoder-py (Kyle). Source code{" "}
        <a
          href="https://github.com/dekoder-py/react-website"
          target="_blank"
          className="underline hover:text-blue-600 dark:hover:text-blue-400"
        >
          here
        </a>
        .
      </footer>
      <Analytics />
    </>
  );
}

export default App;
