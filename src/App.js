import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Nk from "./Nk";


function App() {
  const[p,setp]=useState(false)
  const fn =()=>{
    setp(true)
    setTimeout(()=>{
      setp(false)
    },3000)
  }

  const fs=(a)=>{
    setp(true)
    setalert(a)
    setTimeout(()=>{
      setp(false)
    },3000)
  }
  const [alert,setalert] =useState('Light');

  const [st,setst] =useState({
    color: '#042743'
  })

  const[mode, setmode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setalert('Dark mode enabled');
      setmode('dark');
      setst({
        color: "white"
      })
      document.body.style.backgroundColor='#042743';
      fn();
     // document.title ='qk'
    }
    else{
      setalert('Light mode enabled')
      setmode('light');
      setst({
        color:"#042743"
      })
      document.body.style.backgroundColor='white';
      fn()
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextTransformX" mode={mode} toggleMode={toggleMode} st={st} />
        {p ? <Alert m={alert}  /> : null}
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform heading="Enter Your Text" mode={mode} toggleMode={toggleMode} stt={st} fn={fs} />} />
            <Route exact path="/link" element={<Nk/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
