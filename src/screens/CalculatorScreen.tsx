import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalculator} from '../components/ButtonCalculator';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {
    lastResult,
    result,
    clear,
    changeSign,
    btnDel,
    buttonAddition,
    buttonSubtraction,
    buttonDivision,
    buttonMultiplication,
    createNumber,
    calculateResult,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {/* if lastResult is diff to cero  */}
      {lastResult !== '0' && (
        <Text style={styles.previusResult}>{lastResult}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>
      {/* button */}
      <View style={styles.row}>
        <ButtonCalculator color="grey-light" action={clear} text="C" />
        <ButtonCalculator color="grey-light" text="+/-" action={changeSign} />
        <ButtonCalculator color="grey-light" text="Del" action={btnDel} />
        <ButtonCalculator color="orange" text="/" action={buttonDivision} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="7" action={createNumber} />
        <ButtonCalculator text="8" action={createNumber} />
        <ButtonCalculator text="9" action={createNumber} />
        <ButtonCalculator
          color="orange"
          text="X"
          action={buttonMultiplication}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="4" action={createNumber} />
        <ButtonCalculator text="5" action={createNumber} />
        <ButtonCalculator text="6" action={createNumber} />
        <ButtonCalculator color="orange" text="-" action={buttonSubtraction} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="1" action={createNumber} />
        <ButtonCalculator text="2" action={createNumber} />
        <ButtonCalculator text="3" action={createNumber} />
        <ButtonCalculator color="orange" text="+" action={buttonAddition} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="0" buttonLarge={true} action={createNumber} />
        <ButtonCalculator text="." action={createNumber} />

        <ButtonCalculator color="orange" text="=" action={calculateResult} />
      </View>
    </View>
  );
};
