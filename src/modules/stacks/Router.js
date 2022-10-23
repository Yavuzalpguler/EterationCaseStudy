import {
  ActivityIndicator,
  SafeAreaView,
  Platform,
  NativeModules,
} from 'react-native';
import React, {useEffect} from 'react';

import MainNavigator from '../../navigation/MainStack';
import {retrieveData, storeData} from '../../common/Utility';
import Params from '../../common/Params';
import {useDispatch} from 'react-redux';
import {getUserInfo, updateMainCustomState} from './+store/Main/Main.action';

const Router = () => {
  const dispatch = useDispatch();
  const checkIfLocalDataExists = async () => {
    const localData = await retrieveData(Params.localData);
    if (localData) {
      dispatch(updateMainCustomState('userInfo', JSON.parse(localData)));
    } else {
      dispatch(getUserInfo());
    }
  };

  useEffect(() => {
    checkIfLocalDataExists();
  }, []);

  return <MainNavigator />;
};

export default Router;
