import React, { FC, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from "react-router-dom";
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import { Item } from './interfaces'
import 'moment/locale/uk'
import YouTube from 'react-youtube';
import './item.scss';


const GET_VIEW_ITEM = gql`
  query Launch ($launchId: ID!) {
    launch (id: $launchId) {
        id
    launch_date_local
    mission_name
    rocket {
      rocket_name
    }
    links {
      video_link
      mission_patch_small
    }
    }
  }
`;

const launchId = "5eb87cdbffd86e000604b32c";

function LaunchItem() {
  const { id } = useParams();
  const { loading, error, data } = useQuery<Item>(GET_VIEW_ITEM, {
    variables: {
      launchId: id
    },
  });

  const navigate = useNavigate();
  moment.locale('uk')


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="vievItem">
      {data?.launch.links.mission_patch_small && <img alt="None photo" src={data?.launch.links.mission_patch_small} />}
      <h3>{data?.launch.mission_name}</h3>
      <p>Дата: {moment(data?.launch.launch_date_local).format('ll')}</p>
      <p>Ракета: {data?.launch.rocket.rocket_name}</p>
      <YouTube videoId={data?.launch.links.video_link.split('v=')[1]} />;
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}

export default LaunchItem;
