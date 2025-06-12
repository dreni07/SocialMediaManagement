import {create} from 'zustand';
import { UseModalStateType } from '../types';


const useModalState = create<UseModalStateType>((set) => ({
    isOpen:false,
    setIsOpen:(isOpen:boolean) => set({isOpen})
}));

export default useModalState;