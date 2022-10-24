import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MainScreen from '../MainScreen';
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

describe('MainScreen', () => {
  //clear mock store actions before each test
  beforeEach(() => {
    store.clearActions();
  });

  it('should render correctly', () => {
    const {toJSON} = render(
      <Provider store={store}>
        <MainScreen />
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
        <MainScreen />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render correctly with data', () => {
    const {toJSON} = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should navigate to AddUser screen when add user button is pressed', () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const {getByTestId} = render(
      <Provider store={store}>
        <MainScreen navigation={navigation} />
      </Provider>,
    );
    fireEvent.press(getByTestId('addUserButton'));
    expect(getByTestId('addUserButton')).toBeTruthy();
  });

  it('should navigate to AddUser screen when add button is pressed', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <MainScreen navigation={navigation} />
      </Provider>,
    );
    fireEvent.press(getByTestId('addUserButton'));
    expect(navigation.navigate).toHaveBeenCalledWith('AddUser');
  });

  it('should navigate to MainDetail screen when user item is pressed', () => {
    const {getByText} = render(
      <Provider store={store}>
        <MainScreen navigation={navigation} />
      </Provider>,
    );
    fireEvent.press(getByText('Homer Simpson'));
    expect(navigation.navigate).toHaveBeenCalledWith('MainDetail', {
      item: {
        id: 1,
        name: 'Homer Simpson',
        age: 39,
        image: 'https://i.imgur.com/1TQOw9A.png',
      },
    });
  });

  it('should remove user at index 0 when remove button is pressed', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    );

    fireEvent.press(getByTestId('RemoveButton0'));

    expect(store.getActions()).toEqual([
      {
        key: 'userInfo',
        type: '@UPDATE_MAIN_CUSTOM_STATE',
        value: {
          data: [
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

  it('should shift user up at index 1 when shift up button is pressed', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    );

    fireEvent.press(getByTestId('UpButton1'));

    expect(store.getActions()[0].value.data[0]).toEqual({
      id: 2,
      name: 'Marge Simpson',
      age: 36,
      image: 'https://i.imgur.com/1TQOw9A.png',
    });
  });

  it('should not shift user up at index 0 when shift up button is pressed', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    );

    fireEvent.press(getByTestId('UpButton0'));

    expect(store.getActions()).toEqual([]);
  });

  it('should shift user down at index 0 when shift down button is pressed', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    );
    fireEvent.press(getByTestId('DownButton0'));

    expect(store.getActions()[0].value.data[1]).toEqual({
      id: 2,
      name: 'Marge Simpson',
      age: 36,
      image: 'https://i.imgur.com/1TQOw9A.png',
    });
  });

  it('should not shift user down at index 1 when shift down button is pressed', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    );

    fireEvent.press(getByTestId('DownButton1'));

    expect(store.getActions()).toEqual([]);
  });
});

// Language: javascript
