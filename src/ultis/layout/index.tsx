import {Dimensions, StatusBar} from 'react-native';

export const getWindowHeight = Dimensions.get('window').height;

export const getWindowWidth = Dimensions.get('window').width;

export const getDeviceHeight = Dimensions.get('screen').height;

export const getScreenWidth = Dimensions.get('screen').width;

export const getWindowHeightStatusBar = (): number => {
  return StatusBar.currentHeight || 24;
};

export const getWindowHeightByPercentage = (percentage: number): number => {
  return Dimensions.get('window').width * percentage;
};
