"use client"
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";
import { todoReducerAtom } from "../States/Todo";
import { useAtom } from "jotai";

const TodoInput = () => {
  const [, dispatch] = useAtom(todoReducerAtom);
  const [value, setValue] = useState("");
  const onClickHandle = () => {
    dispatch({
      type: "ADD",
      payload: {
        id: crypto.randomUUID(),
        title: value,
        status: false
      }
    })
    setValue("");
  }
  return (
    <div className="flex items-center gap-4 border-b border-b-blue-300 pb-5">
      <input type="text" className="p-2 bg-sky-50 text-gray-700 text-sm focus:outline-none w-full rounded-lg" value={value} onChange={(e) => setValue(e.target.value)} />
      <button className="bg-blue-500 p-2 rounded-lg" onClick={onClickHandle}>
        <PlusCircle size={20} color="white" />
      </button>
    </div>
  );
};

export default TodoInput;
