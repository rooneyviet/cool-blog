import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IUserState {
  accessToken: string | null;
}

interface IUserAction {
  setAccessToken: (accessToken: string) => void;
  resetToken: () => void;
}

const initialState: IUserState = {
  accessToken: null,
};

const useUserStore = create<IUserState & IUserAction>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        resetToken: () => {
          set((state) => ({
            ...initialState,
          }));
        },
        setAccessToken: (accessToken: string) => {
          set((state) => ({
            accessToken: accessToken,
          }));
        },
      }),
      {
        name: "user-storage",
      }
    )
  )
);

export default useUserStore;
