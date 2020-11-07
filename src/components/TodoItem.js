import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: props.todo.completed ? 'line-through' : 'none',
    };
  };

  return (
    <div style={getStyle()}>
      <p>
        <input
          type='checkbox'
          onChange={() => props.markComplete(props.todo.id)}
          name=''
          id=''
        />{' '}
        {props.todo.title}{' '}
        <button
          onClick={() => props.deleteTodo(props.todo.id)}
          style={btnStyle}
        >
          x
        </button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
};

export default TodoItem;
