import React from "react";
import BackDrop from "../../components/BackDrop/BackDrop";
import EmbeddedModal from "../../components/EmbeddedModal/EmbeddedModal";

const YoutubeEmbedded = () => {
  return (
    <div>
      <EmbeddedModal />
      <BackDrop show />
    </div>
  );
};

export default YoutubeEmbedded;
