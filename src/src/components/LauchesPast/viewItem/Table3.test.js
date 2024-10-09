// import { render, screen } from '@testing-library/react';
// import { MockedProvider } from "@apollo/client/testing";
// import { GET_VIEW_ITEM, LaunchItem } from "./item";

// const mocks = []; // We'll fill this in next

// describe('USER TEST', () => {

//   let responce;

//   beforeEach(() => {
//     responce = {
//       data: [
//         {
//           "id": 1,
//           "name": "Leanne Graham",
//           "username": "Bret",
//           "email": "Sincere@april.biz",
//           "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//               "lat": "-37.3159",
//               "lng": "81.1496"
//             }
//           },
//           "phone": "1-770-736-8031 x56442",
//           "website": "hildegard.org",
//           "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//           }
//         },
//         {
//           "id": 2,
//           "name": "Ervin Howell",
//           "username": "Antonette",
//           "email": "Shanna@melissa.tv",
//           "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//               "lat": "-43.9509",
//               "lng": "-34.4618"
//             }
//           },
//           "phone": "010-692-6593 x09125",
//           "website": "anastasia.net",
//           "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//           }
//         },
//         {
//           "id": 3,
//           "name": "Clementine Bauch",
//           "username": "Samantha",
//           "email": "Nathan@yesenia.net",
//           "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//               "lat": "-68.6102",
//               "lng": "-47.0653"
//             }
//           },
//           "phone": "1-463-123-4447",
//           "website": "ramiro.info",
//           "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//           }
//         },
//       ]
//     }
//   })


//   test('Получение пользователей', async () => {

//     render(
//       <MockedProvider mocks={mocks} addTypename={false}>
//         <LaunchItem />
//       </MockedProvider>
//     );

//   })
// })

import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, Route } from 'react-router-dom';
import LaunchItem, { GET_VIEW_ITEM } from './Item';

const mocks = [
  {
    request: {
      query: GET_VIEW_ITEM,
      variables: {
        launchId: "5eb87cdbffd86e000604b32c",
      },
    },
    result: {
      data: {
        launch: {
          id: "5eb87cdbffd86e000604b32c",
          launch_date_local: "2020-05-30T19:22:00-04:00",
          mission_name: "Test Mission",
          rocket: {
            rocket_name: "Test Rocket",
          },
          links: {
            video_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            mission_patch_small: "https://example.com/image.jpg",
          },
        },
      },
    },
  },
];

describe('USER TEST', () => {

  test('renders launch item correctly', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <LaunchItem />
      </MockedProvider>
    );

    // await waitFor(() => {
    //   expect(screen.getByText('Test Mission')).toBeInTheDocument();
    //   expect(screen.getByText('Ракета: Test Rocket')).toBeInTheDocument();
    //   expect(screen.getByAltText('None photo')).toBeInTheDocument();
    //   expect(screen.getByTestId('youtube-player')).toBeInTheDocument();
    // });
  });

})



