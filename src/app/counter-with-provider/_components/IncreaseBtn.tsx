import { useAtom } from "jotai";
import { PlusCircle } from "lucide-react";
import React from "react";
import { globalCountState } from "../state/Count";

const IncreaseBtn = () => {
  const [, setCount] = useAtom(globalCountState);
  return (
    <button
      className="bg-blue-200 w-full h-full text-gray-700 flex items-center justify-center"
      onClick={() => setCount((prev) => prev + 1)}
    >
      <PlusCircle size={20} />
    </button>
  );
};

export default IncreaseBtn;
