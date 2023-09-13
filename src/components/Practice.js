import React,{useState} from 'react'

export default function Practice(props) {
const HandleError = () => {
    let NewValue = text.toUpperCase();
    SetText(NewValue)
};
const onDhange = (event) => {
    SetText(event.target.value)

} 

    const [text,SetText] = useState('')
  return (
    <div>
        <h4>{props.title}</h4>
      <textarea className='form-control mx-2 my-2' value={text} id="box" rows="3" onChange={onDhange}></textarea>
      
<button className="btn btn-primary mx-2 my-2"  onClick={HandleError}>Convert to Upper Case</button>

    </div>
  )
}
