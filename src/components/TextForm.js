import React,{useState} from 'react'

export default function TextForm(props) {
const handleUpClick =() => {
          console.log('UpperCase was clicked'+text)
  let newtext = text.toUpperCase();
    SetText(newtext)
    props.showAlert('Text has been converted to Uppercase','success')
    };


const handleLoClick =() => {
        let newtext = text.toLowerCase();
        SetText(newtext)
        props.showAlert('Text has been converted to Lowercase','success')
    };


const handleClearClick =() => {
    let newtext = '';
    SetText(newtext)
    props.showAlert('text has been cleared from textarea','success')
};


const HandleNew = () => {
    let newtext = text.replace('Hello','Heyyyyy')
    SetText(newtext)
    props.showAlert('Hello has been sucessfully converted to Heyyyyy','success')
};


const togglecopy = () => {
  navigator.clipboard.writeText(text)
  props.showAlert('Text has been copied from text area','success')
};


const handlespace = () =>{
let newtext = text.split(/[' ']+/);
SetText(newtext.join(' '))
props.showAlert('Extra spaces has been removed Sucessfully','success')
};


const handleOnChange =(event) => {  //This is used of fill or write in textarea if 
  SetText(event.target.value)        //not we cant enter any text in text area
    };
  
  
  
    const [text,SetText] = useState('');
  return (
    <>
<div style={{color:props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading} </h1>
<div className="mb-3">

    <textarea className="form-control" id="mybox" value={text} style={{backgroundColor:
      props.mode==='dark'?'pink':'white',color:props.mode==='dark'?'white':'black'}}  onChange={handleOnChange} rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert to Upper Case</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleLoClick}>Convert to Lower Case</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={HandleNew}>Change to Heyyyy</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={togglecopy}>Copy text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handlespace}>Eliminate Extra Space</button> 






    </div>
    <div className="container mt-5" style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Text Summary</h3>
      <p>{text.split(/\s/).filter((element) => {return element.length!==0}).length} words and {text.length} characters </p>
      {0.008*text.split(' ').filter((element)=>{return element.length!==0}).length} minutes read <br /> <br />
      <h3>Preview</h3>
      {text.length>0?text:'Nothing to Preview'}
    </div>
    </>
  )
}
