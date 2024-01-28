import { create } from 'zustand'

interface InterfaceState {
  tagsSelected: string[]
  updateTags: (tag: string) => void
}

export const useInterfaceStateStore = create<InterfaceState>((set) => ({
  tagsSelected: [''],
  updateTags(tag: string) {
    set(() => ({ tagsSelected: [tag] }))
  },
}))
