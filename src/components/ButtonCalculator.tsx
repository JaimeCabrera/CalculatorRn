import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ButtonProps {
  text: string;
  // color?: string;
  color?: 'grey-dark' | 'orange' | 'grey-light';
  buttonLarge?: boolean;
  action: (numText: string) => void;
}

export const ButtonCalculator = ({
  text,
  color = 'grey-dark',
  buttonLarge = false,
  action,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.button,
          backgroundColor:
            color === 'grey-light'
              ? '#9b9b9b'
              : color === 'orange'
              ? '#ff9427'
              : '#2d2d2d',
          width: buttonLarge ? 180 : 80,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.buttonText,
            color: color === 'grey-light' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
// buttons
// gris oscuro #2d2d2d
// naranja #ff9427
// gris claro #9b9b9b

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#2d2d2d',
    borderRadius: 100,
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 80,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    fontSize: 30,
    fontWeight: '400',
  },

  greyDark: {
    borderRadius: 100,
    backgroundColor: '#2d2d2d',
  },
  orange: {
    borderRadius: 100,
    backgroundColor: '#ff9427',
  },
  greyLight: {
    borderRadius: 100,
    backgroundColor: '#9b9b9b',
  },
});
