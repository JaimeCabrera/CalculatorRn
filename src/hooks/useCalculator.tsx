import {useRef, useState} from 'react';

enum Operators {
  addition,
  subtraction,
  multiplication,
  division,
}
export const useCalculator = () => {
  const [result, setResult] = useState('0');
  const [lastResult, setLastResult] = useState('0');
  // el useRef es cuando no necesito que se renderice de nuevo la app
  const lastOperation = useRef<Operators>();

  const clear = () => {
    setResult('0');
    setLastResult('0');
  };

  const createNumber = (textNumber: string) => {
    // veriffy if exist a decimal point
    if (result.includes('.') && textNumber === '.') {
      return;
    }

    if (result.startsWith('0') || result.startsWith('-0')) {
      // first decimal point must
      if (textNumber === '.') {
        setResult(result + textNumber);
        // evaluate if next number is cero and have a point
      } else if (textNumber === '0' && result.includes('.')) {
        setResult(result + textNumber);
        // evaluate if number is different of cero y not hav a point
      } else if (textNumber !== '0' && !result.includes('.')) {
        setResult(textNumber);
        // restrict 0000000000.0
      } else if (textNumber === '0' && result.includes('.')) {
        setResult(result);
      }
    } else {
      setResult(result + textNumber);
    }
  };
  // erase last number
  const btnDel = () => {
    let negative = '';
    let tempNum = result;

    if (result.includes('-')) {
      negative = '-';
      tempNum = result.substring(1);
    }
    if (tempNum.length > 1) {
      setResult(negative + tempNum.slice(0, -1));
    } else {
      setResult('0');
    }
  };

  const changeLastResult = () => {
    if (result.endsWith('.')) {
      setLastResult(result.slice(0, -1));
    } else {
      setLastResult(result);
    }
    setResult('0');
  };

  const changeSign = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''));
    } else {
      setResult('-' + result);
    }
  };

  // opeations buttons
  const buttonDivision = () => {
    changeLastResult();
    lastOperation.current = Operators.division;
  };
  const buttonMultiplication = () => {
    changeLastResult();
    lastOperation.current = Operators.multiplication;
  };
  const buttonSubtraction = () => {
    changeLastResult();
    lastOperation.current = Operators.subtraction;
  };
  const buttonAddition = () => {
    changeLastResult();
    lastOperation.current = Operators.addition;
  };

  const calculateResult = () => {
    // change strign to numbner
    const number1 = Number(result);
    const number2 = Number(lastResult);
    switch (lastOperation.current) {
      case Operators.addition:
        setResult(`${number1 + number2}`);
        break;
      case Operators.subtraction:
        setResult(`${number2 - number1}`);
        break;
      case Operators.multiplication:
        setResult(`${number1 * number2}`);
        break;
      case Operators.division:
        if (number1 === 0) {
          setResult('Error');
        } else {
          setResult(`${number2 / number1}`);
        }
        break;
      default:
        break;
    }
    setLastResult('0');
  };
  return {
    result,
    lastResult,
    buttonAddition,
    buttonSubtraction,
    buttonMultiplication,
    buttonDivision,
    btnDel,
    changeSign,
    clear,
    createNumber,
    calculateResult,
  };
};
