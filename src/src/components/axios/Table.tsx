import React, { useEffect, useState } from 'react';
import './Table.scss'
import ItemUser from './TableItem'
import axios from 'axios';
import { User } from './interfaces'


const Users: React.FC = () => {

  const [users, setUsers] = useState<User[]>([])

  const loadUsers = async () => {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
  };

  useEffect(() => {
    loadUsers()
  }, [])


  return (
    <div >
      {
        users.map((el: User) => {
          return (
            <ItemUser
              key={el.id}
              id={el.id}
              name={el.name}
              email={el.email}
            />
            // <div key={el.id} className='user-item' data-testid='user-item'>
            //   <div>{el.id}</div>
            //   <div>{el.name}</div>
            //   <div>{el.email}</div>
            // </div>
          )
        })
      }
    </div >

  );
}

export default Users;
