import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getUserInfo, updateMainCustomState} from '../+store/Main/Main.action';

import {useSelector} from 'react-redux';
import UserItem from './components/UserItem';
import {
  heightPercentage,
  widthPercentage,
} from '../../../constants/StyleVariables';
import styles from './styles';
const MainScreen = props => {
  const dispatch = useDispatch();

  const userInfo = useSelector(state => state.main.userInfo);

  const handleUserItemClick = item => {
    props.navigation.navigate('MainDetail', {item});
  };

  const addUserButton = () => {
    return (
      <TouchableOpacity
        style={styles.addUserButtonWrapper}
        onPress={() => {
          props.navigation.navigate('AddUser');
        }}>
        <Text
          style={{
            fontSize: widthPercentage(10),

            lineHeight: widthPercentage(11),
            color: 'white',
          }}>
          {'\u002b'}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleUserRemove = item => {
    dispatch(
      updateMainCustomState('userInfo', {
        data: userInfo.data.filter(user => user.id !== item.id),
      }),
    );
  };

  const handleUserShiftUp = item => {
    const index = userInfo.data.findIndex(user => user.id === item.id);
    if (index === 0) {
      return;
    }
    const temp = userInfo.data[index];
    userInfo.data[index] = userInfo.data[index - 1];
    userInfo.data[index - 1] = temp;
    dispatch(
      updateMainCustomState('userInfo', {
        data: userInfo.data,
      }),
    );
  };

  const handleUserShiftDown = item => {
    const index = userInfo.data.findIndex(user => user.id === item.id);
    if (index === userInfo.data.length - 1) {
      return;
    }
    const temp = userInfo.data[index];
    userInfo.data[index] = userInfo.data[index + 1];
    userInfo.data[index + 1] = temp;
    dispatch(
      updateMainCustomState('userInfo', {
        data: userInfo.data,
      }),
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <>
        <UserItem
          item={item}
          index={index}
          handleUserItemClick={handleUserItemClick}
          handleUserRemove={handleUserRemove}
          handleUserShiftUp={handleUserShiftUp}
          handleUserShiftDown={handleUserShiftDown}
        />
      </>
    );
  };

  const renderPullToRefresh = () => {
    return (
      <View
        style={{
          alignSelf: 'center',
          paddingBottom: heightPercentage(2),
        }}>
        <Text style={{fontSize: widthPercentage(3), fontWeight: '700'}}>
          Pull to refresh the list
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {userInfo?.data?.length < 4 && renderPullToRefresh()}

      <FlatList
        data={userInfo?.data}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{paddingBottom: heightPercentage(10)}}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={userInfo?.loading}
            onRefresh={() => dispatch(getUserInfo())}
            colors={['red']}
            tintColor={'red'}
            progressBackgroundColor={'red'}
          />
        }
      />

      {addUserButton()}
    </SafeAreaView>
  );
};

export default MainScreen;
