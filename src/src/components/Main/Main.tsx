import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './Main.scss'
import Item from './menuItem/item';

const MenuItemss = [
    {
        name: 'LauchesPast',
        id: 1,
        way: 'LauchesPast'
    },
    {
        name: 'Rocket',
        id: 2,
        way: 'Rocket'
    },
    {
        name: 'Table',
        id: 3,
        way: 'table'
    },
    {
        name: 'Axios',
        id: 4,
        way: 'axios'
    },
]


function Main() {

    return (
        <div className="main">
            <aside className='menu'>
                {MenuItemss.map((el) => {
                    return (
                        <Item id={el.id} name={el.name} way={el.way} />
                    )
                })}
            </aside>
            <body className='body'>
                <Outlet />
            </body>
        </div>
    );
}

export default Main;