import { Backdrop, Container, Modal } from '@material-ui/core';
import React from 'react';
import TenorGifList from '../TenorGifList';
import './TenorModal.styles.css';

const TenorModal = ({ open, onClose, onGifSelect }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        // onClose={() => setModalState({ isModalOpen: false })}
        className="modal"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Container
          disableGutters
          className="paper"
          maxWidth="md"
          // maxWidth="sm"
        >
          <TenorGifList close={onClose} onGifSelect={onGifSelect} />
        </Container>
      </Modal>
    </>
  );
};

export default TenorModal;
