import React ,{useState} from 'react'


export default function Textform(props) {

    const handleupclick = ()=>{
        let tex = text.toUpperCase();
        settext(tex)
    }

    const handlelowclick = ()=>{
        let tex =text.toLocaleLowerCase();
        settext(tex)
    }

    const handleclear = ()=>{
        let tex ="";
        settext(tex);
    }


    const handleonchange = (event)=>{
        settext(event.target.value);
    }

    const [text,settext] = useState("enter text here")
  return (
    <>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="box" className="form-label">Textarea</label>
        <textarea className="form-control" value={text} onChange={handleonchange} id="box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick}>Convert to upper</button>
        <button className="btn btn-primary mx-3" onClick={handlelowclick}>Convert to lower</button>
        <button className="btn btn-primary mx-3" onClick={handleclear}>Clear text</button>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words , {text.length} chracters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

    </>
  )
}
