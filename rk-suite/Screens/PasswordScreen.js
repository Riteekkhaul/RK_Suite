import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


const PasswordScreen = ({navigation}) => {


  const handlePress=()=>{
    navigation.navigate("Gmail");
  }


  return (
    <SafeAreaView style={styles.container}>
    <Text style={{fontSize:28,marginVertical:10,}}>
      Manage  Your All Passwords At One Place 
    </Text>

    <View style={styles.CatCon}>

      <TouchableOpacity style={styles.card} onPress={handlePress}>
        <Text style={styles.cardTitle}>Gmails</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Social Accounts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Educational Sites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Jobs/Company Sites</Text>
      </TouchableOpacity>

     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 16,
    backgroundColor: '#ffffff',
  },
 CatCon: {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between', // Add this to create space between cards
},

card: {
  height: 150,
  width: '48%', // Adjust the width to accommodate two cards in one row with spacing
  backgroundColor: '#f0f0f0',
  borderRadius: 8,
  padding: 16,
  marginVertical: 10, // Adjust the vertical margin to create spacing between rows
},
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default PasswordScreen;
