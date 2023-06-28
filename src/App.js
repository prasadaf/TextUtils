import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.querySelector(".toggleBtn").style.backgroundColor = "#a3cfbb";
      document.querySelector(".toggleBtn").style.borderColor = "white";
      // document.title="TextUtils - Dark mode";
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing";
      // },1000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.querySelector(".toggleBtn").style.backgroundColor = "white";
      document.querySelector(".toggleBtn").style.borderColor = "#198754";
    }
  }
  return (
    <>
    {/* <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
          </Routes> 
      </div>
      </BrowserRouter> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    </>
  );
}

export default App;
