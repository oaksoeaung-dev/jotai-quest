import { useAtom } from "jotai";
import { MinusCircle } from "lucide-react";
import React from "react";
import { globalCountState } from "../state/Count";

const DecreaseBtn = () => {
  const [, setCount] = useAtom(globalCountState);
  return (
    <button
      className="bg-red-200 w-full h-full flex items-center justify-center text-gray-700"
      onClick={() => setCount((prev) => prev - 1)}
    >
      <MinusCircle size={20} />
    </button>
  );
};

export default DecreaseBtn;
