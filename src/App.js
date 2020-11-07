import { useState, Fragment, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Header from './components/Header';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import About from './components/About';
import NotFound from './components/NotFound';

const initialState = [
  // {
  //   id: uuidv4(),
  //   title: 'Take out the trash',
  //   completed: false,
  // },
  // {
  //   id: uuidv4(),
  //   title: 'Dinner with girlfriend',
  //   completed: false,
  // },
  // {
  //   id: uuidv4(),
  //   title: 'Meeting with boss',
  //   completed: false,
  // },
];

const App = () => {
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res) => setTodos(res.data));
    return () => {
      // cleanup;
    };
  }, []);

  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => setTodos([...todos.filter((todo) => todo.id !== id)]));
    // setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodo = (title) => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
      })
      .then((res) => setTodos([...todos, res.data]));
    // const newTodo = {
    //   id: uuidv4(),
    //   title,
    //   completed: false,
    // };
    // setTodos([...todos, newTodo]);
  };

  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <Fragment>
              <AddToDo addTodo={addTodo} />
              <Todos
                todos={todos}
                markComplete={markComplete}
                deleteTodo={deleteTodo}
              />
            </Fragment>
          )}
        />
        <Route exact path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
