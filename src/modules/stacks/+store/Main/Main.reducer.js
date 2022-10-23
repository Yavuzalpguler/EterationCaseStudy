import Params from '../../../../common/Params';
import {storeData} from '../../../../common/Utility';
import {
  GET_USER_INFO_FAILURE,
  GET_USER_INFO_PROGRESS,
  GET_USER_INFO_SUCCESS,
  UPDATE_MAIN_CUSTOM_STATE,
} from './Main.actionTypes';

const initialState = {
  userInfo: {
    success: null,
    loading: true,
    data: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MAIN_CUSTOM_STATE:
      if (action?.key === 'userInfo') {
        storeData(Params.localData, JSON.stringify(action?.value));
      }
      return {
        ...state,
        [action?.key]: action?.value,
      };
    case GET_USER_INFO_PROGRESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          loading: true,
          data: [...state.userInfo.data],
        },
      };
    case GET_USER_INFO_SUCCESS:
      //keep the data in async storage
      storeData(
        Params.localData,
        JSON.stringify({
          ...state.userInfo,

          data: [...action.result],
          loading: false,
        }),
      );
      return {
        ...state,
        userInfo: {
          ...state.userInfo,

          data: [...action.result],
          loading: false,
        },
      };

    case GET_USER_INFO_FAILURE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          data: [...state.userInfo.data],

          loading: false,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
