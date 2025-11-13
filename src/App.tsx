import { Routes, Route, Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { LuGithub, LuMail } from "react-icons/lu";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MySetup from "./pages/MySetup";
import NotFound from "./pages/NotFound";
import "./Style.css";

function App() {
  return (
    <>
      <nav className="flex flex-col sm:flex-row items-center justify-between p-4 bg-latte-mantle dark:bg-macchiato-mantle underline">
        <div
          id="site-links"
          className="flex flex-wrap justify-center sm:justify-start mb-2 sm:mb-0"
        >
          <Link
            className="mr-4 hover:text-latte-blue dark:hover:text-macchiato-blue"
            to="/"
          >
            Home
          </Link>
          <Link
            className="mr-4 hover:text-latte-blue dark:hover:text-macchiato-blue"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="mr-4 hover:text-latte-blue dark:hover:text-macchiato-blue"
            to="/my-setup"
          >
            My Setup
          </Link>
          <Link
            className="mr-4 hover:text-latte-blue dark:hover:text-macchiato-blue"
            to="https://blog.codingcorner.dev"
          >
            Blog
          </Link>
        </div>

        <div id="contact" className="flex space-x-4">
          <a
            href="https://github.com/Dekoder-py"
            target="_blank"
            className="hover:text-latte-blue dark:hover:text-macchiato-blue"
          >
            <LuGithub className="w-5 h-5" />
          </a>
          <a
            href="mailto:kyle@codingcorner.dev"
            className="hover:text-latte-blue dark:hover:text-macchiato-blue"
          >
            <LuMail className="w-5 h-5" />
          </a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
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
