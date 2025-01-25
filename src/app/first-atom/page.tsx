"use client";
import { atom, useAtom } from "jotai";
import React from "react";

const userObj = atom({ name: "Oak Soe Aung", email: "oaksoeaung711@gmail.com" });

const FirstAtom = () => {
  const [user, setUser] = useAtom(userObj);

  const onChangeInput = (inputName:string,value: string) => {
    setUser((prev) => {
      return { ...prev,[inputName]: value };
    });
  };

  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="p-5 bg-sky-100 rounded-lg">
        <div className="p-5 bg-teal-50 rounded-lg space-y-3">
          <div>
            <p className="text-gray-500 text-xs mb-1">Name</p>
            <input
              className="text-gray-700 font-bold text-sm border border-gray-400 rounded-lg w-full p-1 focus:outline-none focus:border-gray-700"
              value={user.name}
              onChange={(e) => onChangeInput(e.target.name,e.target.value)}
              name="name"
            />
          </div>
          <div>
            <p className="text-gray-500 text-xs mb-1">Email</p>
            <input
              className="text-gray-700 font-bold text-sm border border-gray-400 rounded-lg w-full p-1 focus:outline-none focus:border-gray-700"
              value={user.email}
              onChange={(e) => onChangeInput(e.target.name,e.target.value)}
              name="email"
            />
          </div>
        </div>
      </div>
      <div className="p-5 bg-teal-100 rounded-lg">
        <div className="p-5 bg-teal-50 rounded-lg space-y-3">
          <div>
            <p className="text-gray-500 text-xs">Name</p>
            <p className="text-gray-700 font-bold text-sm">{user.name}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs">Email</p>
            <p className="text-gray-700 font-bold text-sm">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstAtom;
