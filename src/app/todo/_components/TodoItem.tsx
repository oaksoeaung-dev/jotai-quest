import React from 'react'
import { Todo } from '../States/Todo'

const TodoItem = ({todo} : {todo: Todo}) => {
  return (
    <li className='text-gray-700 flex items-center gap-4 p-2 text-sm bg-blue-100 rounded-lg'>
      {todo.title}
    </li>
  )
}

export default TodoItem