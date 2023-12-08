import { observer } from 'mobx-react-lite';
import { useMst } from '../../models';
import { useEffect, useState } from 'react';
import {  fetchUsers } from '../../api/api';
import { UserItem } from '../../modules/users/components/user-item';
import './style.css'
import CreateUserModal from '../../modules/users/components/modal-create-user';


export const Users = observer(() =>{
  const { users, addUsers } = useMst();
  const [open, setOpen] = useState()


  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers = await fetchUsers();
      addUsers(fetchedUsers);
    };

    loadUsers();
  }, [users]);
  
  return <div className='wrap'>
    <div className='users'>
      {users.length?users.map((user)=>{
        return <UserItem {...user} />
      }):'Loading...'}
    </div>
    <button onClick={()=>setOpen(true)} style={{whiteSpace: 'pre', cursor: 'pointer'}}>Add User</button>
    <CreateUserModal isOpen={open} onClose={()=>setOpen(false)}/>
  </div>
})