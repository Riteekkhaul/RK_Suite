import React from 'react';
import { View, Text, StyleSheet, ScrollView  , SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

const List = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={46} />
        <Text style={styles.username}>John Doe</Text>
      </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Hollywood </Text>
        </View>

      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryTile}>
            <Text style={styles.tileText}>Released</Text>
          </View>
          <View style={styles.categoryTile}>
            <Text style={styles.tileText}>Upcoming</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.listContainer}>
          <View style={styles.list}>
             <Text style={styles.listText}>Mission Impossible : 7</Text>
              <Text style={styles.listText2}>24/06/23</Text>
          </View>
           <View style={styles.list}>
             <Text style={styles.listText}>Meg : 2</Text>
              <Text style={styles.listText2}>25/06/23</Text>
          </View>
           <View style={styles.list}>
             <Text style={styles.listText}>Deadpool 3</Text>
              <Text style={styles.listText2}>27/06/23</Text>
          </View>
      </ScrollView>

       <View style={styles.addButtonCon}>
          <Text style={styles.addbtnText}>+</Text>
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
    </SafeAreaView>
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
    paddingHorizontal: 16,
  },
  username: {
    fontSize: 28,
    marginLeft: 8,
  },
  content: {
    paddingTop: 10, // Height of the footer + some additional spacing
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryTile: {
    height: 60,
    width:"42%",
    marginVertical:5,
    marginLeft:20,
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
  listContainer: {
    flexDirection: 'column',
    paddingVertical:10,
  },
  list: {
    height: 70,
    width:"90%",
    marginVertical:8,
    marginLeft:20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  listText: {
    fontSize: 24,
    paddingLeft: 10,
    paddingVertical:4,
  },
   listText2: {
    fontSize: 16,
    paddingLeft: 10,
    paddingVertical:2,
  },
  buttonContainer: {
    backgroundColor: 'white',
    padding: 14,
    marginHorizontal: 16,
    alignItems: 'center',
    borderRadius:10,
    marginTop:10,
  },
  buttonText:{
    fontSize:24,
    fontWeight:"bold"
  },
  addButtonCon: {
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius:50,
    width:70,
    height:70,
    position:'absolute',
    bottom:75,
    right:20,
  },
  addbtnText:{
    fontSize:48,
    color:"white",
    fontWeight:"bold"
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

export default List;
