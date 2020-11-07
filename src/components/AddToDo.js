import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddToDo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => setTitle(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.length < 1) {
      alert('Enter a todo');
    } else {
      props.addTodo(title);
      setTitle('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} style={{ display: 'flex' }}>
        <input
          value={title}
          onChange={onChange}
          type='text'
          style={{ flex: '10', padding: '5px' }}
          name='title'
          placeholder='Add Todo...'
        />
        <button type='submit' className='btn' style={{ flex: '1' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

AddToDo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddToDo;
