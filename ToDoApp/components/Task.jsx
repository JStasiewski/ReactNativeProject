import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.container}>
      <Text selectable={true} style={styles.taskText}>
        <Text>{props.text}</Text>
      </Text>
      <TouchableOpacity onPress={() => props.delete(props.index)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#33ccff',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10
  },
  taskText: {
    flex: 1,
    paddingRight: 10,
  },
  deleteButton: {
    height: 42,
    padding: 10,
    backgroundColor: '#99ccff',
    borderRadius: 10,
  }
});

export default Task;