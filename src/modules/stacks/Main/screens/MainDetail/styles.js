import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentage} from '../../../../../constants/StyleVariables';
const styles = StyleSheet.create({
  imageContainer: {
    width: widthPercentage(100),
    height: widthPercentage(80),
  },
  image: {
    width: widthPercentage(100),
    height: widthPercentage(60),
    marginTop: widthPercentage(5),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: widthPercentage(2),
    width: widthPercentage(95),
  },
  itemText: {
    fontSize: widthPercentage(4),

    textAlign: 'center',
    fontWeight: '400',
    marginLeft: widthPercentage(2),
  },
  backHeaderWrapper: {
    flexDirection: 'row',
    marginTop: widthPercentage(14),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButtonWrapper: {
    backgroundColor: '#ffffff80',
    width: widthPercentage(25),
    height: widthPercentage(10),
    borderRadius: widthPercentage(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: widthPercentage(3),
  },
  backButtonText: {color: 'black', fontSize: widthPercentage(3.5)},
  headerTextWrapper: {
    width: widthPercentage(100),
    alignItems: 'center',
    paddingRight: widthPercentage(56),
  },
  headerText: {
    color: 'white',
    fontSize: widthPercentage(5.5),
    fontWeight: '700',
  },
});
export default styles;
