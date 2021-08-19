// import '../index.css';
import './App.css'
import { Todo } from '../features/todo/Todo';
import { Header } from '../components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RandomQuote } from '../features/randomQuote/RandomQuote';

function App() {
  return (
    <Router>
      <main className="grid wide">
        <Header />
        <Route exact path="/todo-app">
          <Todo />
        </Route>
        <Route exact path="/random-quote">
          <RandomQuote />
        </Route>
      </main>
    </Router>
  )
}

export default App;
