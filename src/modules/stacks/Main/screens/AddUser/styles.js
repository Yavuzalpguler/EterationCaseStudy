import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentage,
  widthPercentage,
} from '../../../../../constants/StyleVariables';
const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    height: widthPercentage(13),

    alignSelf: 'center',
    marginTop: heightPercentage(1),
    color: 'black',
    fontSize: widthPercentage(3.5),
    paddingLeft: widthPercentage(3),
    backgroundColor: 'white',
    borderRadius: widthPercentage(2),
    borderWidth: 2,
    borderColor: 'rgba(229, 229, 229, 0.9)',
  },
  addCharButton: {
    width: widthPercentage(90),
    height: widthPercentage(13),
    alignSelf: 'center',
    marginTop: heightPercentage(5),
    backgroundColor: 'rgb(46,134,222)',
    borderRadius: widthPercentage(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
