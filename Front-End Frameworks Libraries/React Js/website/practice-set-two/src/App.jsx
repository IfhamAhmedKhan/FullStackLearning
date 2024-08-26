//import Button from './Button.jsx'
import Students from './Students.jsx'

function App() {
  return(
    //<Button/>
    <>
      <Students name = "Ifham" age={23} IsStudent={false}/>
      <Students name = "Afnan" age={17} IsStudent={true}/>
      <Students name = "Aayan" age={13} IsStudent={true}/>
      <Students/>
    </>
  );
}

export default App
