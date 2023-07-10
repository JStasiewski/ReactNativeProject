import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, SafeAreaView, FlatList } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState('');
  const [tasksItems, setTasksItems] = useState([]);

  const handleAddTask = () => {
    setTasksItems([...tasksItems, task]);
    setTask(null);
  };

  const handleDelete = (index) => {
    setTasksItems(tasksItems.filter((value, ind) => ind !== index));
  };

  const renderItem = ({ item, index }) => (
    <Task key={index} index={index} text={item} delete={handleDelete} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>ToDoApp</Text>
        <FlatList
          data={tasksItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.items}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <KeyboardAvoidingView style={styles.inputArea}>
        <TextInput
          style={styles.input}
          value={task}
          placeholder="Write your tasks"
          onChangeText={(text) => setTask(text)}
          onSubmitEditing={() => handleAddTask()}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addButton}>
            <Text style={styles.buttonFont}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
  tasksWrapper: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  sectionTitle: {
    fontSize: 24,
    padding: 5,
    paddingBottom: 15,
    fontWeight: 'bold',
  },
  items: {
    borderRadius: 10,
  },
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    height: 60,
    borderTopWidth: 5,
    borderTopColor: 'white'
  },
  input: {
    flex: 1,
    backgroundColor: '#00ccff',
    padding: 10,
    width: 'auto',
  },
  addButton: {
    justifyContent: 'center',
    backgroundColor: '#00ccff',
    height: '100%',
  },
  buttonFont: {
    fontSize: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
