import React, { FC } from 'react';
import './item.scss'
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import 'moment/locale/uk'

interface launchesPast {
    id: string;
    mission_name: string;
    launch_date_local: Date;
    rocket_name: string;
    video_link: string;
    flickr_images: string[];
}

const Item: FC<launchesPast> = ({ id, mission_name, launch_date_local, rocket_name, video_link, flickr_images }) => {

    const navigate = useNavigate();
    moment.locale('uk')

    return (
        <div key={id} className='itemPast' onClick={()=> navigate(`/LauchesPast/${id}`)}>
            <h5>{mission_name}</h5>
            <div>Ракета: {rocket_name}</div>
            <img width='80px' height='80px' alt='' src={`${flickr_images}`} />
            <div>Дата: {moment(launch_date_local).format('ll')}</div>
        </div>
    );
}

export default Item;