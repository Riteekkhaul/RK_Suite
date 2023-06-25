import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Modal,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

const List = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [activeTab, setActiveTab] = useState('Released');

  const [movies, setMovies] = useState([
    {
      title: 'Mission Impossible : 7',
      date: '24/06/2023',
      category: 'Released',
    },
    { title: 'Meg : 2', date: '25/06/2023', category: 'Released' },
    { title: 'Deadpool 3', date: '27/06/2023', category: 'Upcoming' },
    { title: 'Movie 4', date: '28/06/2023', category: 'Released' },
    { title: 'Movie 5', date: '29/06/2023', category: 'Upcoming' },
  ]);

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setReleaseDate(selectedDate);
    }
    setShowDatePicker(false);
  };

  const triggerDatePicker=()=>{
    setShowDatePicker(true);
  }

  {
    showDatePicker && (
      <DateTimePicker
        value={releaseDate}
        mode="date"
        display="default"
        onChange={handleDateChange}
      />
    );
  }

  const formattedDate = format(releaseDate, 'dd/MM/yyyy');

  const handlePressBack = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    // Validate input fields
    if (movieTitle.trim() === '' || selectedCategory.trim() === '') {
      return;
    }
    // Create a new movie object
    const newMovie = {
      title: movieTitle.trim(),
      date: formattedDate,
      category: selectedCategory.trim(),
    };

    // Add the new movie to the movies array
    const updatedMovies = [...movies, newMovie];

    // Set the updated movies array
    setMovies(updatedMovies);

    // Clear input values and close the modal
    setMovieTitle('');
    setReleaseDate(new Date());
    setSelectedCategory('');
    setModalVisible(false);
  };

  const deleteMovie = (index) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={34}
          onPress={handlePressBack}
          style={styles.headerIcon}
        />
        <Ionicons name="person-circle-outline" size={46} />
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Hollywood </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <TouchableOpacity
            style={[
              styles.categoryTile,
              activeTab === 'Released' && styles.activeTile,
            ]}
            onPress={() => setActiveTab('Released')}>
            <Text style={styles.tileText}>Released</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryTile,
              activeTab === 'Upcoming' && styles.activeTile,
            ]}
            onPress={() => setActiveTab('Upcoming')}>
            <Text style={styles.tileText}>Upcoming</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.listContainer}>
        {movies
          .filter((movie) =>
            activeTab === 'Released'
              ? movie.category === 'Released'
              : movie.category === 'Upcoming'
          )
          .map((movie, index) => (
            <View key={index} style={styles.list}>
              <Text style={styles.listText}>{movie.title}</Text>
              <Text style={styles.listText2}>{movie.date}</Text>
              <TouchableOpacity
                onPress={() => deleteMovie(index)}
                style={styles.deleteButton}>
                <Ionicons name="trash-outline" size={32} color="red" />
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>

      <View style={styles.addButtonCon}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.addbtnText}>+</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Movie</Text>
            <TextInput
              style={styles.input}
              placeholder="Movie Title"
              value={movieTitle}
              onChangeText={setMovieTitle}
            />

            <TouchableOpacity onPress={triggerDatePicker}>
              <Text style={styles.input}>{formattedDate}</Text>
            </TouchableOpacity>

            <View style={styles.selectContainer}>
              <Text style={styles.selectLabel}>Category:</Text>
              <Picker
                style={styles.selectInput}
                selectedValue={selectedCategory}
                onValueChange={(itemValue) => setSelectedCategory(itemValue)}>
                <Picker.Item label="Select Category" value="" />
                <Picker.Item label="Upcoming" value="Upcoming" />
                <Picker.Item label="Released" value="Released" />
              </Picker>
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  content: {
    paddingTop: 10, // Height of the footer + some additional spacing
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  activeTile: {
    backgroundColor: 'orange',
    color: 'white',
  },

  categoryTile: {
    height: 60,
    width: '42%',
    marginVertical: 5,
    marginLeft: 20,
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
    paddingVertical: 10,
  },
  list: {
    height: 70,
    width: '90%',
    marginVertical: 8,
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  listText: {
    fontSize: 24,
    paddingLeft: 10,
    paddingVertical: 4,
  },
  listText2: {
    fontSize: 16,
    paddingLeft: 10,
    paddingVertical: 2,
  },
  buttonContainer: {
    backgroundColor: 'white',
    padding: 14,
    marginHorizontal: 16,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButtonCon: {
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 50,
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 15,
    right: 20,
  },
  addbtnText: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  selectLabel: {
    flex: 1,
    fontSize: 16,
  },
  selectInput: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  submitButton: {
    backgroundColor: 'green',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: 'red',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});

export default List;
