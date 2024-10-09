import React, { FC, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import './Rocket.scss';
import Item from './RocketItem/item';


interface rockets {
  active: boolean,
  company: string,
  country: string,
  diameter: {
    meters: number
  },
  first_flight: Date,
  height: {
    meters: number
  },
  id: string,
  mass: {
    kg: number
  },
  name: string
}

interface RocketsData {
  rockets: rockets[];
}

const GET_ROCKETS = gql`
  query Rockets ($limit:Int!, $offset:Int!) {
    rockets (limit:$limit, offset:$offset) {
      active
    company
    country
    diameter {
      meters
    }
    first_flight
    height {
      meters
    }
    id
    mass {
      kg
    }
    name
    }
  }
`;

const PAGE_SIZE = 10;

function Rocket() {
  const [pag, setPag] = useState(0)
  const { loading, error, data, fetchMore } = useQuery<RocketsData>(GET_ROCKETS, {
    variables: {
      limit: PAGE_SIZE + pag * PAGE_SIZE,
      offset: pag * PAGE_SIZE
    },
  });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    // console.log('asdf= ', data?.launchesPast)
    <div className="lauchesPast">
      {data?.rockets.map((el) => {
        return (
          <Item
            id={el.id}
            name={el.name}
            company={el.company}
            country={el.country}
            first_flight={el.first_flight}
            diameter={el.diameter.meters}
            height={el.height.meters}
          />
        )
      })}
    </div>
  );
}

export default Rocket;
