import React from 'react';
import { View, Text, StyleSheet, ScrollView ,StatusBar , SafeAreaView,TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

const HomeScreen = ({ navigation }) => {

  const handlePress = () => {
    navigation.navigate('Movies');
  };


  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={46} />
        <Text style={styles.username}>John Doe</Text>
      </View>
       <View style={styles.UpcomingContainer}>
          <Text style={styles.buttonText}>Upcoming : </Text>
          <Text style={styles.buttonText}>Mission Impossible </Text>
        </View>
      <View >
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryTile} onPress={handlePress}>
            <Text style={styles.tileText}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTile}>
            <Text style={styles.tileText}>Web Series</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTile}>
            <Text style={styles.tileText}>Podcast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTile}>
            <Text style={styles.tileText}>TV Shows</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addButton}>
          <Ionicons name="add-circle-outline" size={58} />
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Movies Sites </Text>
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
    backgroundColor: '#ffffff',
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    position:'absolute',
    top:40,
  },
  username: {
    fontSize: 28,
    marginLeft: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:20,
  },
  categoryTile: {
    height: 130,
    width: 150,
    marginVertical:16,
    marginLeft:25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tileText: {
    fontSize: 28,
    padding: 10,
    textAlign: 'center',
  },
  addButton: {
    marginTop: 16,
    alignSelf: 'center',
    marginBottom: 16,
  },
  UpcomingContainer:{
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginHorizontal:10,
    borderRadius:10,
    display:"flex",
    flexDirection:"row"
  },
  buttonContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginHorizontal: 16,
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

export default HomeScreen;


 // <View style={styles.footer}>
      //   <View style={styles.tab}>
      //     <Ionicons name="eye-outline" size={24} />
      //     <Text>Watchlist</Text>
      //   </View>
      //   <View style={styles.tab}>
      //     <Ionicons name="list-outline" size={24} />
      //     <Text>Today's Tasks</Text>
      //   </View>
      //   <View style={styles.tab}>
      //     <Ionicons name="lock-closed-outline" size={24} />
      //     <Text>Passwords</Text>
      //   </View>
      // </View>
