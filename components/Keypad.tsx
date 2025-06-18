import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const keys = [
  ['PLU', 'X', 'CLEAR'],
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  ['0', '00', '.'],
  ['COMMAND', 'CASH', 'ENTER'],
];

export default function Keypad() {
  return (
    <View style={styles.container}>
      {keys.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {row.map((key, index) => (
            <TouchableOpacity style={styles.key} key={index}>
              <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  key: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
