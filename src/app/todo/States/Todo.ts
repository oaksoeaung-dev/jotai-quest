import { atomWithReducer } from "jotai/utils";

export type Todo = {
  id: string,
  title: string,
  status: boolean
}

type Action = {type: "ADD", payload: Todo}

const todoReducer = (prev: Todo[], action: Action) => {
  if(action.type === 'ADD') {
    return [...prev, action.payload]
  }
  throw new Error("Unknown action type.");
}


export const todoReducerAtom = atomWithReducer<Todo[], Action>([{id: crypto.randomUUID(), title: "To eat", status: false}], todoReducer)
