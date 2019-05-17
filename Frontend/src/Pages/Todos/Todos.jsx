import React from 'react';
import Todo from './todo';
import {connect} from 'react-redux';

import { toggleCompleted } from '../../Redux/Actions/filters';

import './todos.scss';
function Todos (props){
    const {
      inputNewTask, 
      handleNewTask, 
      toggleCompleted,
      addTask,
      setNewTaskText,
      newTaskText,
    } = props;
  
    return (
      <div className='todos'>
        <div className='addTask'>
          <input 
            ref={inputNewTask} 
            type='text' 
            placeholder='add new task' 
            onKeyUp={handleNewTask} 
            value={newTaskText} 
            onChange={(e) => setNewTaskText(e.target.value)} 
          />
          <button type="button" onClick={() => addTask(newTaskText)}>Crea Tarea</button>
          <button onClick={toggleCompleted}>toggleShowCompleted </button>
        </div>
        <div className='taskList'>
          {
            props.todos
              .filter(todo => !props.showCompleted || !todo.completed)
              .map(todo => (
                  <Todo 
                    data={todo}
                    key={todo.id} 
                  />
                )
              )
          }
        </div>
      </div>
    );
}

const mapStateToProps = (state, props) => {
  return {
    todos: state.todos,
    showCompleted: state.filters.showCompleted
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleCompleted: () => dispatch(toggleCompleted())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);