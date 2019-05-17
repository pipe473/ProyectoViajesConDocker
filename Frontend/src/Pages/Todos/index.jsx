import React, { useState } from 'react';
import { connect } from 'react-redux'

import Todos from './Todos';
import { addTodo } from '../../Redux/Actions/todos';

function TodosComponent (props) {
  const [newTaskText, setNewTaskText] = useState('');
  const inputNewTask = React.createRef();

  const addTask = text => {
    text = text.trim();
    if(text) {
      props.addTodo(text)

      setNewTaskText('');
      inputNewTask.current.focus();
    }
  };

  const handleNewTask = ev => {
    if (ev.keyCode === 13) {
      addTask(newTaskText);
    }
  };

  return (
    <Todos 
      inputNewTask= {inputNewTask}
      handleNewTask= {handleNewTask}
      addTask={addTask}
      newTaskText={newTaskText}
      setNewTaskText={setNewTaskText}
    />
  )
}

const mapDispatchToProps = (dispatch, props) => { 
  return {
    addTodo: (text) => dispatch(addTodo(text))
  }
}

export default connect(null, mapDispatchToProps)(TodosComponent);
