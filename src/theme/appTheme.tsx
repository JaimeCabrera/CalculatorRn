import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  result: {
    color: 'white',
    fontSize: 50,
    textAlign: 'right',
    marginBottom: 15,
  },
  previusResult: {
    color: '#797D7F',
    fontSize: 30,
    textAlign: 'right',
  },
  // row
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
