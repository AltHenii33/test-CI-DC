import React, { FC } from 'react';
import { useNavigate } from "react-router-dom";
import './item.scss'

interface ItemInteface {
    id: number;
    name: string;
    way: string;
}

const Item: FC<ItemInteface> = ({ id, name, way }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${way}`)
    }

    return (
        <button key={id} onClick={handleClick} className="item">
            {name}
        </button>
    );
}

export default Item;