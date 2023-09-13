import React,{useState} from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import Practice from './components/Practice';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Simple from './components/Simple';
import {BrowserRouter as Main,Route,Routes} from 'react-router-dom'
import Practice from './components/Practice';










function App() {
  const [mode , setMode] = useState('light')
  const [alert,setAlert] = useState('null')
  const [button,setButton] = useState('success')

  const showAlert = (message,type) => {
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },2000);
  
     };

 const toggleButton = () => {
  if(button === 'success'){
    setButton('red')
  }
 }    

//  const toggleModeRed = () => {
//     if(mode  === 'red'){
//       setMode('dark')
//       document.body.style.backgroundColor='grey'
//       showAlert('Dark mode has enabled', 'success');
      
//       document.title='Textutils - Dark mode'
//     }
//     else{
//       setMode('red')
//       document.body.style.backgroundColor='red'
//       showAlert('Red mode has enabled', 'success');
//       document.title='Textutils - Red mode'

//     }
  // }
  const removeBackground = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-white')

  }

  const toggleMode = (cls) => {
    removeBackground()
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    // if(mode  === 'light'){
    //   setMode('dark')
    //   document.body.style.backgroundColor='grey'
    //   showAlert('Dark mode has enabled', 'success');
    //   document.title='Textutils - Dark mode'
    //   // setInterval (()=>{
      //   document.title='Install textutils now'

      // },2000)
      // setInterval (()=>{
      //   document.title='Install immediately'

      // },1500)
    }
    // else{
    //   setMode('light')
    //   document.body.style.backgroundColor='white'
    //   showAlert('Light mode has enabled', 'success');
    //   document.title='Textutils - Light mode'
    
  
  const toggleModeGreen = () =>{
    if(mode  === 'red'){
            setMode('dark')
            document.body.style.backgroundColor='grey'
            showAlert('Dark mode has enabled', 'success');
            
            document.title='Textutils - Dark mode'
          }
          else{
            setMode('red')
            document.body.style.backgroundColor='red'
            showAlert('Red mode has enabled', 'success');
            document.title='Textutils - Red mode'
      

      
    }
  }

  return (
    <>
    <Main>
      <Navbar title='Textutils' mode={mode} toggleMode={toggleMode} toggleModeGreen={toggleModeGreen} />
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
          <Route exact path='/practice' element={<Practice title='Headlines'/>}/> 
          <Route exact path='/about' element={<About mode={mode}/>}/>
          {/* <Route exact path='/' element={<Navbar/>}/> */}
          <Route exact path='/' element={<TextForm showAlert={showAlert} toggleButton={toggleButton} heading='Enter your Heading' mode={mode}/>}/>
          <Route exact path='/simple' element={<Simple/>}/>
          
        
        
        
        </Routes>
    </div>
    
    </Main>

    </>
  );
}

export default App;
