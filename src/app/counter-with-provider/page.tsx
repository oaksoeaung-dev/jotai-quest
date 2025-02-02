"use client";
import { createStore, Provider } from "jotai";
import Counter from "./_components/Counter";
import { useState } from "react";

const myStore1 = createStore();
const myStore2 = createStore();
const CounterWithProvider = () => {
  console.log("Render");
  const [num, setNum] = useState(0);
  return (
    <div className="space-y-5">
      <Provider store={myStore1}>
        <Counter />
      </Provider>
      <Provider>
        <Counter />
      </Provider>
      <button onClick={() => setNum(num + 1)} className="max-w-40 h-10 w-full rounded-lg bg-green-200">
        UseState Button {num}
      </button>
    </div>
  );
};

export default CounterWithProvider;
/* 
 * Store မပါဘူးဆိုရင် page တွေပြောင်းရင် value က အစကနေပြန်ဖြစ်သွားတယ်
*/