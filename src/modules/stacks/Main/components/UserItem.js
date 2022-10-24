import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {widthPercentage} from '../../../../constants/StyleVariables';

const UserItem = ({
  item,
  index,
  handleUserItemClick,
  handleUserRemove,
  handleUserShiftUp,
  handleUserShiftDown,
}) => {
  const REMOVE = 'REMOVE';
  const UP = 'UP';
  const DOWN = 'DOWN';
  const renderActionButton = type => {
    return (
      <TouchableOpacity
        style={[
          styles.actionButtonWrapper,
          {
            backgroundColor:
              type === REMOVE ? 'black' : type === DOWN ? 'red' : 'green',
          },
        ]}
        key={index + type}
        testID={
          type === REMOVE
            ? 'RemoveButton' + index
            : type === DOWN
            ? 'DownButton' + index
            : 'UpButton' + index
        }
        onPress={() => {
          type === REMOVE
            ? handleUserRemove(item)
            : type === DOWN
            ? handleUserShiftDown(item)
            : handleUserShiftUp(item);
        }}>
        <Text style={{fontSize: widthPercentage(3), color: 'white'}}>
          {type === REMOVE ? 'X' : type === DOWN ? '\u2193' : '\u2191'}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <TouchableOpacity
      style={styles.userItemWrapper}
      onPress={() => handleUserItemClick(item)}>
      <Text style={{flex: 0.2}}>{index + 1}</Text>

      <FastImage
        style={styles.imageContainer}
        source={{
          uri: item?.avatar,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.userNameText}>{item?.name}</Text>
      <View style={styles.actionButtonsContainer}>
        {renderActionButton(UP)}
        {renderActionButton(DOWN)}
        {renderActionButton(REMOVE)}
      </View>
    </TouchableOpacity>
  );
};

export default UserItem;
