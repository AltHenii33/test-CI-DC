import React, { FC, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import './LauchesPast.scss';
import Item from './lauchPastItem/item';


interface launchesPast {
    id: string;
    mission_name: string;
    launch_date_local: Date;
    rocket: {
        rocket_name: string;
    };
    links: {
        video_link: string;
        flickr_images: string[];
    }
}

interface RocketInventoryData {
    launchesPast: launchesPast[];
}

const GET_LOCATIONS = gql`
  query ListLaunches ($limit:Int!, $offset:Int!) {
    launchesPast (limit:$limit, offset:$offset) {
      id,
      mission_name ,
      launch_date_local ,
      rocket {
        rocket_name
      }
      launch_date_local
      links {
        video_link
        flickr_images
      }
    }
  }
`;

const PAGE_SIZE = 30;

function LauchesPast() {
    const [pag, setPag] = useState(0)
    const { loading, error, data, fetchMore } = useQuery<RocketInventoryData>(GET_LOCATIONS, {
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
            {data?.launchesPast.map((el) => {
                return (
                    <Item
                        id={el.id}
                        mission_name={el.mission_name}
                        launch_date_local={el.launch_date_local}
                        rocket_name={el.rocket.rocket_name}
                        video_link={el.links.video_link}
                        flickr_images={el.links.flickr_images}
                    />
                )
            })}
        </div>
    );
}

export default LauchesPast;
