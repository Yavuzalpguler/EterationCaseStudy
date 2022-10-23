import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export {width, height};

export const widthPercentage = percentage => {
  return width * (percentage / 100);
};
export const heightPercentage = percentage => {
  return height * (percentage / 100);
};
