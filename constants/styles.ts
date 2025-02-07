import { Platform, StyleSheet, StatusBar } from 'react-native';
import { Colors } from '@/constants/colors';

export const STATUS_BAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const sharedStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Body,
    flexGrow: 1,
  }
})
