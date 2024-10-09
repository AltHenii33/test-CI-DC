import { Children } from 'react';
import App from '../../App';
import LauchesPast from '../components/LauchesPast/LauchesPast';
import Main from '../components/Main/Main';
import LaunchItem from '../components/LauchesPast/viewItem/Item';
import Rocket from '../components/Rocket/Rocket';
import Table from '../components/tabl/Table';
import Users from '../components/axios/Table';


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = [
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: 'LauchesPast',
                children: [
                    {
                        path: '',
                        element: <LauchesPast />,
                    },
                    {
                        path: ':id',
                        element: <LaunchItem />,
                    }
                ]
            },
            {
                path: 'Rocket',
                children: [
                    {
                        path: '',
                        element: <Rocket />,
                    },
                ]
            },
            {
                path: 'table',
                children: [
                    {
                        path: '',
                        element: <Table />,
                    },
                ]
            },
            {
                path: 'axios',
                children: [
                    {
                        path: '',
                        element: <Users />,
                    },
                ]
            }
        ]
    },
    {
        path: '*',
        element: <Main />
    }
];

export default MainRoutes;
