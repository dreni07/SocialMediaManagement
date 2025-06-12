import {create} from 'zustand'
import type { WillAnimateType } from '../types';

const useWillAnimate = create<WillAnimateType>((set) => ({
    willAnimate:false,
    setWillAnimate:(willAnimate:boolean) => set({willAnimate})
}));

export default useWillAnimate;