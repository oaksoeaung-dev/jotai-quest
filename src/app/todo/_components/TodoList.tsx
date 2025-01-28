"use client"
import React from 'react'
import { todoReducerAtom } from '../States/Todo'
import TodoItem from './TodoItem'
import { useAtom } from 'jotai';

const TodoList = () => {
  const [todos, ] = useAtom(todoReducerAtom);
  return (
    <ul className='space-y-3'>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList