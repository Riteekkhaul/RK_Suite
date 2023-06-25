import React from 'react';
import { View, Text, StyleSheet, ScrollView,StatusBar , SafeAreaView,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';


const Movies = ({ navigation }) => {

   const handlePressBack = () => {
    navigation.goBack();
    };

   const handlePress = () => {
    navigation.navigate('List');
    };


  return (
     <SafeAreaView  style={styles.container}>
      <View style={styles.header}>
       <Ionicons name="arrow-back" size={34} onPress={handlePressBack} style={styles.headerIcon} />
        <Ionicons name="person-circle-outline" size={46} />
      </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Movies </Text>
        </View>
      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryTile} onPress={handlePress}>
            <Text style={styles.tileText}>Hollywood</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTile} onPress={handlePress}>
            <Text style={styles.tileText}>Bollywood</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTile} onPress={handlePress}>
            <Text style={styles.tileText}>Tollywood</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTile} onPress={handlePress}>
            <Text style={styles.tileText}>Animated</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.tab}>
          <Ionicons name="eye-outline" size={24} />
          <Text>Watchlist</Text>
        </View>
        <View style={styles.tab}>
          <Ionicons name="list-outline" size={24} />
          <Text>Today's Tasks</Text>
        </View>
        <View style={styles.tab}>
          <Ionicons name="lock-closed-outline" size={24} />
          <Text>Passwords</Text>
        </View>
      </View>
    </ SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    justifyContent:"space-between",
    paddingHorizontal: 16,
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    zIndex: 1,
    elevation: 1,
  },
  content: {
    paddingTop: 20, // Height of the header
    paddingBottom: 20, // Height of the footer + some additional spacing
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryTile: {
    height: 130,
    width: 150,
    marginVertical:16,
    marginLeft:25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tileText: {
    fontSize: 24,
    padding: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius:10,
  },
  buttonText:{
    fontSize:22,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    zIndex: 1,
    elevation: 1,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 8,
    borderRadius:10,
    marginHorizontal:10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Movies;
