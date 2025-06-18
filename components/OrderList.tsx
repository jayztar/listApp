import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const orders = [
  { id: '1', description: "Appetizer", amount: '100.00' },
  { id: '2', description: 'Main Dish', amount: '50.00' },
  { id: '3', description: 'Beverage', amount: '200.00' },
];

export default function OrderList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.title}>Amount</Text>
      </View>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.item}>{item.description}</Text>
            <Text style={styles.item}>{item.amount}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  item: {
    fontSize: 16,
  },
});
