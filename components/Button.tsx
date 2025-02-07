import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/colors';

type Props = {
  onPress: () => void,
  text: string,
  isReverse?: boolean,
}

export const Button: React.FC<Props> = ({text, isReverse, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, isReverse && styles.buttonReverse]}>
      <Text style={[styles.text, isReverse && styles.textReverse]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 9,
    paddingHorizontal: 14,
    backgroundColor: Colors.Contrast,
    borderWidth: 1,
    borderColor: Colors.Contrast,
    borderRadius: 68,
    width: 'auto',
    alignSelf: 'flex-start',
  },
  buttonReverse: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.32)',
  },
  text: {
    fontSize: 13,
  },
  textReverse: {
    color: Colors.Contrast,
  }
})
