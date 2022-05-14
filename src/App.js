import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#303035";
      document.title = "textUtils - darkMode";
      showAlert("Dark Mode has been enabled.", "success");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert("Light Mode has been enabled.", "success");
      document.title = "textUtils - lightMode";
    }
  };

  const redMode = () => {
    if (mode === "danger") {
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert("Light Mode has been enabled.", "success");
    } else {
      setMode("danger");
      document.body.style.backgroundColor = "#420b11";
      showAlert("Red Mode has been enabled.", "success");
    }
  };

  const blueMode = () => {
    if (mode === "primary") {
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert("Light Mode has been enabled.", "success");
    } else {
      setMode("primary");
      document.body.style.backgroundColor = "#001433";
      showAlert("Blue Mode has been enabled.", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          redMode={redMode}
          blueMode={blueMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact // it is always a better idea to use exact before path, varna /users/home agar hoga to react gadbadi karega
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below:"
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
