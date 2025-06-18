import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import OrderList from './components/OrderList';
import Keypad from './components/Keypad';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <OrderList />
      <Keypad />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffcc',
  },
});
