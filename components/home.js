import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Content with a white background */}
      <View style={styles.header}>
        <Text>Mascotas perdidas en tu area</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center'
  },
  header: {
    backgroundColor: '#103F2B', 
    padding: 60, 
    borderBottomLeftRadius: 22,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomEndRadius: 22,
    marginTop: 30,
    width: 380,
    height: 40,
    alignItems: 'left'

  },
  headerText: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 24,
  }
});

export default HomeScreen;