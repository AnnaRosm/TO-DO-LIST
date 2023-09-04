import './App.css';
import { ToDoList } from './ToDoList';
import image from './pencil.png';

function App() {
  return (
    <div className="App">
      <div className='container' >
        <h1 className='header'>What do you want to do?</h1>
      </div>
    <ToDoList/>
    <div className='container'>
      <img className='pencil' src={image} width='100px' alt='pencil'/>
    </div>
    </div>
  );
}

export default App;
