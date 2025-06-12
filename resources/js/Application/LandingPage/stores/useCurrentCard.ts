import {create} from 'zustand';
import { CurrentCardState } from '../types';

const useCurrentCard = create<CurrentCardState>((set) => ({
    currentCard:0,
    setCurrentCard:(card_id:number) => set({currentCard:card_id})
}))

export default useCurrentCard;