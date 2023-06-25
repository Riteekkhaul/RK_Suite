import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

const TaskScreen = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') {
      return; // Prevent adding empty tasks
    }

    const newTask = {
      id: Date.now(), // Generate a unique ID
      title: newTaskTitle.trim(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskTitle('');
    setModalVisible(false);
  };

  const handleEditTask = (taskId) => {
    const editedTask = tasks.find((task) => task.id === taskId);
    if (editedTask) {
      setNewTaskTitle(editedTask.title);
      setEditingTask(editedTask);
      setModalVisible(true);
    }
  };

  const handleSaveEditTask = () => {
    if (!editingTask) {
      return; // No task being edited
    }

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === editingTask.id) {
          return { ...task, title: newTaskTitle.trim() };
        }
        return task;
      })
    );

    setNewTaskTitle('');
    setEditingTask(null);
    setModalVisible(false);
  };

  const handleAddButtonPress = () => {
    setNewTaskTitle('');
    setEditingTask(null);
    setModalVisible(true);
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskRow}>
      <Text style={styles.taskText}>{item.title}</Text>
      <TouchableOpacity onPress={() => handleEditTask(item.id)}>
        <Ionicons name="create-outline" size={24} color="blue" />
      </TouchableOpacity>
       <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>All Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Enter task"
              value={newTaskTitle}
              onChangeText={(text) => setNewTaskTitle(text)}
            />
            <View style={styles.modalButtons}>
              {editingTask ? (
                <TouchableOpacity style={styles.button} onPress={handleSaveEditTask}>
                  <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={[styles.button, { backgroundColor: 'gray' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.addButton} onPress={handleAddButtonPress}>
        <Text style={styles.addButtonText}>+</Text>
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
  heading: {
    fontSize: 24,
    marginVertical: 10,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  taskText: {
    fontSize: 16,
    flex: 1,
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
  addButton: {
    backgroundColor: '#03C04A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 16,
    elevation: 4, // Add elevation for the shadow effect
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow radius
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3CB043',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginLeft: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TaskScreen;
