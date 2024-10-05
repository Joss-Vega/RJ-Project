import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuBar from '../components/MenuBar';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      {/* Score Section */}
      <View style={styles.card}>
        <Text style={styles.score}>Score: 90</Text>
      </View>

      {/* Uploaded and Received Requests */}
      <View style={styles.card}>
        <Text style={styles.statsText}>Uploaded Requests: 22</Text>
        <Text style={styles.statsText}>Received Requests: 30</Text>
      </View>

      {/* Menu Bar at the Bottom */}
      <MenuBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    padding: 20,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  score: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
  },
  statsText: {
    fontSize: 18,
    color: '#003366',
    textAlign: 'center',
  },
});

export default Dashboard;
