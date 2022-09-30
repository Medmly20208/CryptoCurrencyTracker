import React, { useState } from "react";

//Iconify
import { Icon } from "@iconify/react";

//components
import Modal from "../../../Components/Modal";
import ModalContent from "./ModalContent";

const MobileNavBar = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const OpenModal = () => {
    setDisplayModal(true);
  };

  const CloseModal = () => {
    setDisplayModal(false);
  };

  return (
    <div className="flex sx:hidden">
      <Icon
        icon="fontisto:nav-icon"
        className="cursor-pointer text-[25px]"
        onClick={OpenModal}
      />
      {displayModal && (
        <Modal content={<ModalContent />} onClose={CloseModal} />
      )}
    </div>
  );
};

export default MobileNavBar;
