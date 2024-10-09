import { render, screen } from '@testing-library/react';
import ItemUser from './TableItem';

jest.mock('axios');

describe('USER ITEM TEST', () => {

  let responce;

  beforeEach(() => {
    responce = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
  })


  test('Получение пользователей', async () => {

    render(<ItemUser {...responce} />)

    expect((await screen.findAllByTestId('user-item')).length).toBe(1);
    expect((await screen.findAllByTestId('id')).length).toBe(1);
    expect((await screen.findAllByTestId('email')).length).toBe(1);

  })
})


