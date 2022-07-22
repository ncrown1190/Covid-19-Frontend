import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Main />
        {/* <Routes>
          <Route path="/" element={<Main />} />
        </Routes> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
