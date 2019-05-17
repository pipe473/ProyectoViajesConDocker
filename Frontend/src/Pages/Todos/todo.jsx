import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteTodo } from '../../Redux/Actions/todos';

import './todo.scss';

const propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  deleteTodo: PropTypes.func.isRequired,
  // onEdit: PropTypes.func.isRequired,
}

const defaultProps = {
  // hola: 'hola'
}

function Template (props) {
  const completedTask = props.completed ? ' completed ' : '';

  return (
    <div>
        <div className={'todo' + completedTask}>
          {props.children}
          {/* <small className='id'>{id}</small> */}
          <div className='actions'>
            <span onClick={props.delete}>🗑️</span>
            <span onClick={props.complete}>{props.completed ? '✔️' : '✅'} </span>
            <Link to={`/todo/${props.id}/edit`}>Editar</Link>
          </div>
        </div>
    </div>
  )
}

class Todo extends Component {
  // delete = () => this.props.onRemove(this.props.data.id);
  complete = () => {
    let newTask = { ...this.props.data, completed: !this.props.data.completed };
    this.props.onEdit(newTask);
  };

  render() {
    const { data, descripcion } = this.props;
    
    return (
      <Template 
        {...data} 
        complete={this.complete} 
        delete={this.props.deleteTodo}
      >
        <h3 className='text'>{data.text}</h3>
        {descripcion && <p>{descripcion}</p>}
      </Template>
    );
  }
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteTodo: () => dispatch(deleteTodo(props.data.id))
  }
}

export default connect(null, mapDispatchToProps)(Todo);
