import {
  GET_USER_INFO_PROGRESS,
  UPDATE_MAIN_CUSTOM_STATE,
} from './Main.actionTypes';

export const getUserInfo = () => ({
  type: GET_USER_INFO_PROGRESS,
});

export const updateMainCustomState = (key, value) => ({
  type: UPDATE_MAIN_CUSTOM_STATE,
  key,
  value,
});
