import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import ProjectPage from "./components/Projects/ProjectCard";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const App = () => {
  return (
    <Router>
      <Header />
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
library.add(fab, fas, far);
