import React from "react";
import Header from "./Routing/Header";
import Home from "./Routing/Home";
import Students from "./Routing/Students";
import Contact from "./Routing/Contact";
import PageNotFound from "./Routing/PageNotFound";
import Edit from "./Routing/Edit";
import { StudentContext } from "./Routing/StudentContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <StudentContext>
      <div id="screen">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students-desc" element={<Edit />}>
              <Route path=":selectedId" element={<Edit />} />
            </Route>
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    </StudentContext>
  );
};
export default App;