import { FC } from 'react';
import './Item.scss'
import { User } from './interfaces'


const ItemUser: FC<User> = ({ id, name, email }) => {


  return (
    <div className='user-item' data-testid="user-item">
      <div data-testid="id">{id}</div>
      <div data-testid="name">{name}</div>
      <div data-testid="email">{email}</div>
    </div>
  );
}

export default ItemUser;