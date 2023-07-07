import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState('');
  const [tasksItems, setTasksItems] = useState([]);

  const handleAddTask = () => {
    console.log(task)
    setTasksItems([...tasksItems, task]);
    setTask(null)
  }

  const handleDelete = (index) => {
    setTasksItems(tasksItems.filter((value, ind) => ind !== index))
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>ToDoApp</Text>
        <View style={styles.items}>
          {
            tasksItems.map((item, index) => {
              //console.log(`${item}  ${index}`)
              return <Task key={index} index={index} text={item} delete={handleDelete} />
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView>
        <TextInput value={task} placeholder='write your tasks' onChangeText={text => setTask(text)} onSubmitEditing={() => handleAddTask()}></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingLeft: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {},
});
