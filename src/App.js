import logo from './logo.svg';
import './App.css';
import Profilez from './Profilez';

function App() {
  let a = 5;
  return (
    <>
      <p>The value of a is {a}</p>
      <p>The value of a is {a}</p>

      <Profilez name = "Yasir Mahmood" detail = "Head of Software Development" designation = "Senior"/>
      <Profilez name = "Areeba Khaleeq" detail = "Backend Developer" designation = "Junior"/>
    </>
    
    
  );
}

export default App;
