import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ICountState {
  count: number;
}

interface ICountAction {
  setCount: (count: number) => void;
}

const initialState: ICountState = {
  count: 1,
};

const useCountStore = create<ICountState & ICountAction>()(
  devtools((set, get) => ({
    ...initialState,
    setCount: (count: number) => {
      set((state) => ({
        count: count,
      }));
    },
  }))
);

export default useCountStore;
