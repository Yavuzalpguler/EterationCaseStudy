import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {widthPercentage} from '../../../../../constants/StyleVariables';
const MainDetail = props => {
  const {route} = props;
  const {item} = route.params;
  const NAME = 'NAME';
  const JOB = 'JOB';
  const DESCRIPTION = 'DESCRIPTION';
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const renderItemDetails = (type, data) => {
    const conditionalTextStyle =
      type === NAME
        ? {fontSize: widthPercentage(7), fontWeight: '500'}
        : type === JOB
        ? {fontSize: widthPercentage(5), fontWeight: '300'}
        : {fontSize: widthPercentage(4), textAlign: 'left', fontWeight: '200'};

    return (
      <View style={styles.itemTextWrapper}>
        <Text style={[styles.itemText, conditionalTextStyle]}>{data}</Text>
      </View>
    );
  };

  const renderUserImage = () => {
    return (
      <View style={[styles.imageContainer, {backgroundColor: generateColor()}]}>
        {renderBackButton()}
        <FastImage
          style={[styles.image]}
          source={{
            uri: item?.avatar,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}></FastImage>
      </View>
    );
  };

  const renderBackButton = () => {
    return (
      <View style={styles.backHeaderWrapper}>
        <TouchableOpacity
          style={styles.backButtonWrapper}
          onPress={() => props.navigation.goBack()}>
          <Text style={styles.backButtonText}>
            {'\u2190'}
            {' Simpsons'}
          </Text>
        </TouchableOpacity>
        <View style={styles.headerTextWrapper}>
          <Text style={styles.headerText}>Details</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      {renderUserImage()}
      <View style={{marginTop: widthPercentage(10)}}>
        {renderItemDetails(NAME, item?.name)}
        {renderItemDetails(JOB, item?.job)}
        {renderItemDetails(DESCRIPTION, item?.description)}
      </View>
    </View>
  );
};

export default MainDetail;
