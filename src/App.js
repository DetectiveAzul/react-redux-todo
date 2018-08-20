import React, { Component } from 'react';
import Footer from './components/Footer.js';
import AddTodo from './containers/AddTodo.js';
import VisibleTodoList from './containers/VisibleTodoList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
