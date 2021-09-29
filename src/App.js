import juan from './Juan.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={juan} alt="" />
        <p>
          <strong>Juan Lucero</strong><br/>
          React-Native Apprenticeship Lead<br/>
          He/Him
        </p>
      </header>
    </div>
  );
}

export default App;
