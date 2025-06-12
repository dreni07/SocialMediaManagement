

export type Card = {
    card_image:string,
    card_title:string,
    card_description:string,
    longer_description:string
}

export type CurrentCardState = {
    currentCard:number,
    setCurrentCard:(card_id:number) => void
}

export type UseModalStateType = {
    isOpen:boolean,
    setIsOpen:(isOpen:boolean) => void
}

export type WillAnimateType = {
    willAnimate:boolean,
    setWillAnimate:(willAnimate:boolean) => void
}