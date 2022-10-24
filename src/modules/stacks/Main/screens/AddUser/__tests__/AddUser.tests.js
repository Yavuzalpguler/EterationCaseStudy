import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import AddUser from '../AddUser';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
const store = mockStore({
  main: {
    userInfo: {
      data: [
        {
          id: 1,
          name: 'Homer Simpson',
          age: 39,
          image: 'https://i.imgur.com/1TQOw9A.png',
        },
        {
          id: 2,
          name: 'Marge Simpson',
          age: 36,
          image: 'https://i.imgur.com/1TQOw9A.png',
        },
      ],
    },
  },
});
const navigation = {
  navigate: jest.fn(),
};
describe('AddUser', () => {
  //clear mock store actions before each test
  beforeEach(() => {
    store.clearActions();
  });
  //clear inputs after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const {toJSON} = render(
      <Provider store={store}>
        <AddUser />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('should render correctly with empty data', () => {
    const store = mockStore({
      main: {
        userInfo: {
          data: [],
        },
      },
    });
    const {toJSON} = render(
      <Provider store={store}>
        <AddUser />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should handle add user when all fields are filled', async () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <AddUser navigation={navigation} />
      </Provider>,
    );
    const nameInput = getByTestId('nameInput');
    const jobInput = getByTestId('jobInput');
    const aboutInput = getByTestId('aboutInput');
    const imageInput = getByTestId('imageInput');
    const addButton = getByTestId('addButton');
    fireEvent.changeText(nameInput, 'Homer Simpson');
    fireEvent.changeText(jobInput, 39);
    fireEvent.changeText(aboutInput, 'Dad to all');
    fireEvent.changeText(imageInput, 'https://i.imgur.com/1TQOw9A.png');
    fireEvent.press(addButton);
    await waitFor(() => {
      expect(navigation.navigate).toHaveBeenCalledWith('MainScreen');
      expect(nameInput.props.value).toEqual('Homer Simpson');
      expect(jobInput.props.value).toEqual(39);
      expect(aboutInput.props.value).toEqual('Dad to all');
      expect(imageInput.props.value).toEqual('https://i.imgur.com/1TQOw9A.png');
    });
  });

  it('should not handle add user when all fields are not filled', async () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <AddUser navigation={navigation} />
      </Provider>,
    );
    const nameInput = getByTestId('nameInput');
    const jobInput = getByTestId('jobInput');
    const aboutInput = getByTestId('aboutInput');
    const imageInput = getByTestId('imageInput');
    const addButton = getByTestId('addButton');
    fireEvent.changeText(nameInput, '');
    fireEvent.changeText(jobInput, '');
    fireEvent.changeText(aboutInput, '');
    fireEvent.changeText(imageInput, '');

    fireEvent.press(addButton);
    await waitFor(() => {
      expect(navigation.navigate).not.toHaveBeenCalledWith('MainScreen');
    });
  });

  it('should update store when add user is handled', async () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <AddUser navigation={navigation} />
      </Provider>,
    );
    const nameInput = getByTestId('nameInput');
    const jobInput = getByTestId('jobInput');
    const aboutInput = getByTestId('aboutInput');
    const imageInput = getByTestId('imageInput');
    const addButton = getByTestId('addButton');
    fireEvent.changeText(nameInput, 'Homer Simpson');
    fireEvent.changeText(jobInput, 39);
    fireEvent.changeText(aboutInput, 'Dad to all');
    fireEvent.changeText(imageInput, 'https://i.imgur.com/1TQOw9A.png');
    fireEvent.press(addButton);
    await waitFor(() => {
      expect(store.getActions()).toEqual([
        {
          key: 'userInfo',
          type: '@UPDATE_MAIN_CUSTOM_STATE',
          value: {
            data: [
              {
                description: 'Dad to all',
                id: 3,
                image: 'https://i.imgur.com/1TQOw9A.png',
                job: 39,
                name: 'Homer Simpson',
              },
              {
                id: 1,
                name: 'Homer Simpson',
                age: 39,
                image: 'https://i.imgur.com/1TQOw9A.png',
              },
              {
                id: 2,
                name: 'Marge Simpson',
                age: 36,
                image: 'https://i.imgur.com/1TQOw9A.png',
              },
            ],
          },
        },
      ]);
    });
  });
});
