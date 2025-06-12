import React from 'react'
import Modal from 'react-modal';
import useModalState from '../stores/useModal';

import type { Card } from '../types';

interface ModalProps {
  card_details:Card,
  shouldCloseOnEsc:boolean,
  isOpen:boolean,
}


const ModalPage = ({card_details,shouldCloseOnEsc,isOpen}:ModalProps) => {
  const setModalOpen = useModalState((state) => state.setIsOpen);

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc={shouldCloseOnEsc}
      overlayClassName="custom-modal-overlay"
      className="custom-modal-content"
    >
      <div className="h-[90%] w-[90%]">
        <div className="w-full text-center">
          <h1 className="text-[#333] font-outfit font-bold text-2xl">{card_details.card_title}</h1>

          <div className="w-full">
            <p className="max-w-md font-outfit opacity-75 text-sm text-center py-5">{card_details.longer_description}</p>
          </div>
          
          <div className="w-full">
            <button
              className="dark-button px-7 py-1 shadow-sm cursor-pointer text-white rounded-sm"
              onClick={() => {setModalOpen(false)}}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalPage