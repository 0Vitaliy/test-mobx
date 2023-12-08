import React, { useState } from 'react';
import { useMst } from '../../../../models';
import Modal from '../../../../components/modal';

const EditNameModal = ({ isOpen, onClose, userId, defaultValue }) => {
  const [name, setName] = useState(defaultValue);
  const { users } = useMst();

  const handleEditName = () => {
    const userToEdit = users.find(user => user.id === userId);
    if (userToEdit) {
      userToEdit.editName(name);
    }

    setName('')
    onClose();
  };

  return (
    <Modal isOpen={isOpen}>
      <div style={{minWidth: '300px'}}>
        <h2>Edit Name</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '20px' }}>
          <input placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{display: 'flex', gap: '20px'}}>
          <button disabled={!name} onClick={handleEditName}>Edit</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default EditNameModal;
