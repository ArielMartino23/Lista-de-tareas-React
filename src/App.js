import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='freeCodeCamp logo'
        />
      </div>
      <div className='to-do-list-main'>
        <h1>My tasks</h1>
          <TaskList />
      </div>
    </div>
  );
}

export default App;
