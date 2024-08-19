import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";

function App() {
  const[p,setp]=useState(false)
  const fn =()=>{
    setp(true)
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
      setalert('Dark');
      setmode('dark');
      setst({
        color: "white"
      })
      document.body.style.backgroundColor='#042743';
      fn();
      
    }
    else{
      setalert('Light')
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
    <Navbar title="TextTransformX" mode={mode} toggleMode={toggleMode} st={st}/>
    {p ? <Alert m={alert} /> : null}
    <div className="container">
    <Textform heading="Enter Your Text" mode={mode} toggleMode={toggleMode} stt={st} /> 

    </div>
    
    </>
  );
}

export default App;
