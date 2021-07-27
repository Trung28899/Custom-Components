import React from "react";
import BackDrop from "../../components/BackDrop/BackDrop";
import TikTokModal from "../../components/TikTokModal/TikTokModal";

const ModalScreen = () => {
  return (
    <div>
      <TikTokModal />
      <BackDrop show />
    </div>
  );
};

export default ModalScreen;
