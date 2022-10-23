import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentage,
  widthPercentage,
} from '../../../constants/StyleVariables';
const styles = StyleSheet.create({
  addUserButtonWrapper: {
    position: 'absolute',
    bottom: widthPercentage(10),
    alignSelf: 'center',
    backgroundColor: 'rgb(46,134,222)',
    width: widthPercentage(15),
    height: widthPercentage(15),
    borderRadius: widthPercentage(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
