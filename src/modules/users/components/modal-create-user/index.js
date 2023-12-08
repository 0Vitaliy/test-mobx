import React, { useState } from 'react';
import { useMst } from '../../../../models';
import Modal from '../../../../components/modal';

const CreateUserModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { addUser, users } = useMst();

  const handleCreateUser = () => {
    const newUser = {
      id: users.length + 1,
      name,
      email,
      username: "Antonette",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
          }
        },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
      }
    };
    addUser(newUser)
    setName('')
    setEmail('')
    onClose();
  };

  return (
    <Modal isOpen={isOpen}>
      <div style={{minWidth: '300px'}}>
        <h2>Create User</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '20px' }}>
          <input placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{display: 'flex', gap: '20px'}}>
          <button disabled={!name || !email} onClick={handleCreateUser}>Create</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateUserModal;
