"use client";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Plus, Trash2 } from "lucide-react";
import React from "react";

const storedItems = atomWithStorage("items", ["apple", "pencil"]);
const initValue = atom("");

const PersistingStateValuePage = () => {
  const [items, setItems] = useAtom(storedItems);
  const [value, setValue] = useAtom(initValue);

  const onAdd = () => {
    if (!items.includes(value) && value ) {
      setItems((prev) => [...prev, value]);
    }
    setValue("");
  };

  const onDelete = (deleteItem: string) => {
    setItems((prev) => prev.filter((item) => item !== deleteItem));
  };
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-700">This store in local storage</h1>
      <div className="max-w-xs p-5 bg-teal-50 rounded-lg space-y-3">
        <div className="flex gap-2 items-center">
          <input
            className="w-full border p-1.5 rounded focus:outline-none text-xs"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="p-2 bg-green-500 rounded-full text-white cursor-pointer" type="button" onClick={onAdd}>
            <Plus size={13} />
          </button>
        </div>
        <hr className="border-gray-400" />
        <div>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={item + index} className="text-gray-700 text-sm p-2 flex items-center justify-between group">
                {item}
                <button
                  type="button"
                  className="cursor-pointer text-sm hidden group-hover:block"
                  onClick={() => onDelete(item)}
                >
                  <Trash2 size={19} className="text-red-500" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PersistingStateValuePage;
