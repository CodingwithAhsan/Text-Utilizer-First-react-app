import React ,{useState} from "react";

function Textarea() {
    // const handleonchange = (e) => {
    //     settext(e.target.value)
    // }

    const lowercase = ()=>{
        settext(text.toLowerCase());
    }
    const UpperCase = ()=>{
        settext(text.toUpperCase());
    }
    const clearcase =()=>{
      settext("");
    }
    const handleonchange = (event)=>{
        settext(event.target.value);
    }
const [text, settext] = useState("enter text here")
    return (
        <>
    <div >
      <div  className="form-floating    m-5">
        <textarea rows="6" value={text} onChange={handleonchange}
          className="form-control h-75"
          placeholder="Enter text here"
          id="floatingTextarea"
        ></textarea>
      </div>
      {/* button container staaaaaaart */}
<div className="flex container"> 
      <button onClick={UpperCase} type="button" className=" btn mx-2 btn-warning">
        To upper case
      </button>
      <button onClick={lowercase} type="button" className=" mx-2 btn btn-danger">
        To Lower case
      </button>
      
      <button onClick={clearcase} type="button" className=" mx-2 btn btn-primary">
        Clear
      </button>
      </div>   
{/* text summary container start */}
<div className="summarycontainer container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} chracters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0? text : "Enter text to preview here"}</p>
        </div>
    </div>
    </>
  );
}

export default Textarea;
