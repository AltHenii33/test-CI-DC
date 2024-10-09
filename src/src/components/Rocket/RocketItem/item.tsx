import React, { FC } from 'react';
import './item.scss'
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import 'moment/locale/uk'

interface RocketItem {
    id: string;
    name: string;
    company: string;
    country: string;
    first_flight: Date;
    diameter: number;
    height: number;
}

const Item: FC<RocketItem> = ({ id, name, company, country, first_flight, diameter, height }) => {

    const navigate = useNavigate();
    moment.locale('uk')

    return (
        <div key={id} className='itemRocket' onClick={() => navigate(`/Rocket/${id}`)}>
            <h5>{name}</h5>
            <div>Компанія: {company}</div>
            <div>Країна: {country}</div>
            <div>Перший політ: {moment(first_flight).format('ll')}</div>
            <div>
                <div>Діаметр: {diameter}</div>
                <div>Висота: {height}</div>
            </div>
        </div>
    );
}

export default Item;