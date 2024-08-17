import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {

  const [st,setst] =useState({
    color: "black"
  })

  const[mode, setmode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      setst({
        color: "white"
      })
      document.body.style.backgroundColor='black';
    }
    else{
      setmode('light');
      setst({
        color:"black"
      })
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title="TextTransformX" mode={mode} toggleMode={toggleMode} st={st}/>
    <div className="container">
    <Textform heading="Enter Your Text" mode={mode} toggleMode={toggleMode} /> 

    </div>
    
    </>
  );
}

export default App;
