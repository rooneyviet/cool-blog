"use client";

import { Button } from "@/components/ui/button";
import useCountStore from "@/store/useCountStore";
import React from "react";
import { useShallow } from "zustand/react/shallow";

export const Test1Page = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <CounterTextDisplay />

      <CounterButton />
    </div>
  );
};

export default Test1Page;

const CounterButton = () => {
  const { count, setCount } = useCountStore(
    useShallow((state) => ({ count: state.count, setCount: state.setCount }))
  );
  return (
    <div className="background-red-500 text-white text-xl p-2 rounded-lg">
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

const CounterTextDisplay = () => {
  const { count } = useCountStore(
    useShallow((state) => ({ count: state.count, setCount: state.setCount }))
  );
  return (
    <div className="background-red-500 text-white text-xl p-2 rounded-lg">
      {count}
    </div>
  );
};
