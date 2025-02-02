"use client";
import Counter from "./_components/Counter";

const CounterWithGlobalShareStatePage = () => {
  return (
    <div className="space-y-5">
      <Counter />
      <Counter />
    </div>
  );
};

export default CounterWithGlobalShareStatePage;
