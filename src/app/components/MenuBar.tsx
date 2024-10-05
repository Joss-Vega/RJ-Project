import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const MenuBar = () => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Requests</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#003366',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  menuItem: {
    padding: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MenuBar;
