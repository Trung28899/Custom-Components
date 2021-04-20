import React from "react";
import BackDrop from "../../components/BackDrop/BackDrop";
import Modal from "../../components/Modal/Modal";

const ModalScreen = () => {
  return (
    <div>
      <Modal />
      <BackDrop show />
    </div>
  );
};

export default ModalScreen;
