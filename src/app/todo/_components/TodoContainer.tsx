import React from 'react'
import TodoList from './TodoList';
import TodoInput from './TodoInput';

const TodoContainer = () => {
  return (
    <div className='p-5 rounded-lg bg-blue-200 max-w-lg space-y-3'>
      <h1 className='text-3xl font-semibold text-gray-700 text-center'>Todos</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default TodoContainer