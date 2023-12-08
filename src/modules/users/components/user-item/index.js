import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useMst } from '../../../../models';
import EditNameModal from '../modal-edit-name';
import './style.css'

export const UserItem = observer(({name, email, id, blocked}) => {
  const { users, removeUser } = useMst();
  const [isOpen,setIsOpen] = useState(false)

  const handleToggleBlock = (userId) => {
    const userToToggle = users.find(user => user.id === userId);
    if (userToToggle) {
      userToToggle.toggleBlock();
    }
  };
 
  return <div className='user-item'>
    <div className='blocked'>
      <input id={`ch${id}`} type="checkbox" onClick={() => handleToggleBlock(id)}/>
      <label htmlFor={`ch${id}`}>{blocked?"Enabled":"Disabled"}</label>
    </div>
    <h3>{name}</h3>
    <div>{email}</div>
    <div className='btns-action'>
      <button disabled={blocked} onClick={()=>setIsOpen(true)}>Edit Name</button>
      <button disabled={blocked}  onClick={()=>removeUser(id)}>Remove User</button>
    </div>
    <EditNameModal defaultValue={name} isOpen={isOpen} onClose={()=>setIsOpen(false)} userId={id}/>
  </div>
})