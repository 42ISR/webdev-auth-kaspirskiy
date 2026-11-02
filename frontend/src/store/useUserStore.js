import { create } from "zustand"

export const useUserStore = create(() => ({
    user: undefined,
    setUser: (user) => {
        set({user})
    }
}))