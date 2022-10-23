import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentage} from '../../../../constants/StyleVariables';
const styles = StyleSheet.create({
  imageContainer: {
    width: widthPercentage(15),
    height: widthPercentage(15),
    flex: 2,
    alignItems: 'center',
  },
  imageOverlay: {
    width: widthPercentage(35),
    height: widthPercentage(5),
    flexDirection: 'row',

    backgroundColor: 'rgba(70,0,0,0.9)',
    borderRadius: widthPercentage(3),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: widthPercentage(1),
  },
  actionButtonWrapper: {
    width: widthPercentage(6),
    height: widthPercentage(6),
    borderRadius: widthPercentage(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  userItemWrapper: {
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: widthPercentage(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: widthPercentage(2),
    flexDirection: 'row',
    flex: 1,
  },
  userNameText: {
    color: 'black',
    textAlign: 'left',
    flex: 5,
    fontSize: widthPercentage(4),
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
export default styles;
