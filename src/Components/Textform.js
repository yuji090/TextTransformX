import React ,{useState} from 'react'


export default function Textform(props) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard');
                // Optionally, you can add a UI notification here.
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
            {props.fn('Text Copied')}

    };

    const handleupclick = ()=>{
        let tex = text.toUpperCase();
        settext(tex);
        {props.fn('Text converted to Uppercase')}

        
    }

    const handlelowclick = ()=>{
        let tex =text.toLocaleLowerCase();
        settext(tex);
        {props.fn('Text converted to Lowercase')}
    }

    const handleclear = ()=>{
        let tex ="";
        settext(tex);
        {props.fn('Text Cleared')}
    }


    const handleonchange = (event)=>{
        settext(event.target.value);
    }

    const [text,settext] = useState("enter text here")
  return (
    <>
            <h1 style={props.stt}>{props.heading}</h1>
        <div className="mb-3" style={props.stt}>
        <label htmlFor="box" className="form-label">Textarea</label>
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'?'white':'black'}} id="box" rows="8"></textarea>
        </div>
            <button className="btn btn-primary" onClick={handleupclick}>Convert to upper</button>
            <button className="btn btn-primary mx-3" onClick={handlelowclick}>Convert to lower</button>
            <button className="btn btn-primary mx-3" onClick={handleclear} >Clear text</button>
            <button className="btn btn-primary mx-3" onClick={copyToClipboard}>Copy text</button>
        <div className="container my-3">
            <h1 style={props.stt}>Your Text Summary</h1>
            <p style={props.stt}>{text.split(" ").length} words , {text.length} chracters</p>
            <h2 style={props.stt}>Preview</h2>
            <p style={props.stt}>{text.length>0? text : 'Enter Something to preview it here'}</p>
        </div>

    </>
  )
}
