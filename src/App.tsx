import CodeDisplay from './components/CodeDisplay';
import MessagesDisplay from './components/MessagesDisplay';

function App() {
  return (
    <div className="app">
      <MessagesDisplay />
      <input />
      <CodeDisplay />
      <div className="button-container">
        <button id="get-query"> </button>
        <button id="clear-chat"> </button>
      </div>
    </div>
  )
}

export default App;
