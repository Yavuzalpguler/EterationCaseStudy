import AsyncStorage from '@react-native-async-storage/async-storage';

export const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(`@Storage:${key}`).then(val => {
      return val;
    });
    if (value !== null) {
      return value;
    }
  } catch (error) {}
};

export const storeData = async (key, val) => {
  try {
    await AsyncStorage.setItem(`@Storage:${key}`, val);
  } catch (error) {}
};
