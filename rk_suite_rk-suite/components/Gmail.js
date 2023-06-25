import React, { useState } from 'react';
import { View, Text, StyleSheet,ScrollView, SafeAreaView,FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Constants from 'expo-constants';

const Gmail = () => {
  const [gmailData, setGmailData] = useState([
    { id: 1, gmail: 'rkhaul1610@gmail.com', password: 'Riteek@1610' },
    { id: 2, gmail: 'example@gmail.com', password: 'Password123' },
    { id: 3, gmail: 'test@gmail.com', password: 'Test@123' },
    { id: 4, gmail: 'john.doe@gmail.com', password: 'JDoe@456' },
    { id: 5, gmail: 'jane.doe@gmail.com', password: 'JJane@789' },
    { id: 6, gmail: 'jane.doe@gmail.com', password: 'JJane@789' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [newGmail, setNewGmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleAddGmail = () => {
    if (newGmail.trim() === '' || newPassword.trim() === '') {
      return; // Prevent adding empty data
    }

    const newGmailData = {
      id: Date.now(),
      gmail: newGmail.trim(),
      password: newPassword.trim(),
    };

    setGmailData((prevData) => [...prevData, newGmailData]);
    setNewGmail('');
    setNewPassword('');
    setModalVisible(false);
  };

  const handleEditGmail = () => {
    if (newGmail.trim() === '' || newPassword.trim() === '') {
      return; // Prevent adding empty data
    }

    setGmailData((prevData) =>
      prevData.map((item) => {
        if (item.id === editItemId) {
          return { ...item, gmail: newGmail.trim(), password: newPassword.trim() };
        }
        return item;
      })
    );
    setNewGmail('');
    setNewPassword('');
    setEditItemId(null);
    setEditModalVisible(false);
  };

  const handleDeleteGmail = (itemId) => {
    setGmailData((prevData) => prevData.filter((item) => item.id !== itemId));
  };

  const renderGmailCard = (item) => (
    <View style={styles.card} key={item.id}>
      <Text style={styles.cardTitle}>Gmail: {item.gmail}</Text>
      <Text style={styles.cardTitle}>Password: {item.password}</Text>
      <View style={styles.cardButtons}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            setNewGmail(item.gmail);
            setNewPassword(item.password);
            setEditItemId(item.id);
            setEditModalVisible(true);
          }}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteGmail(item.id)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 28, marginVertical: 10 }}>G-Mails</Text>
       <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          {gmailData.map((item) => renderGmailCard(item))}
        </View>
      </ScrollView>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Gmail</Text>
            <TextInput
              style={styles.input}
              placeholder="Gmail"
              value={newGmail}
              onChangeText={(text) => setNewGmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={newPassword}
              onChangeText={(text) => setNewPassword(text)}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.saveButton} onPress={handleAddGmail}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setNewGmail('');
                  setNewPassword('');
                  setModalVisible(false);
                }}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal visible={editModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Gmail</Text>
            <TextInput
              style={styles.input}
              placeholder="Gmail"
              value={newGmail}
              onChangeText={(text) => setNewGmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={newPassword}
              onChangeText={(text) => setNewPassword(text)}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.saveButton} onPress={handleEditGmail}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setNewGmail('');
                  setNewPassword('');
                  setEditItemId(null);
                  setEditModalVisible(false);
                }}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.addButtonContainer} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonIcon}>+</Text>
      </TouchableOpacity>
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
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    width: "95%",
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  editButton: {
    backgroundColor: '#007FFF',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  saveButton: {
    backgroundColor: '#03C04A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#03C04A',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  addButtonIcon: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default Gmail;
