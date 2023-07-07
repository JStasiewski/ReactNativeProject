import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
  return (
    <View>
        <Text>{props.text}</Text>
        <TouchableOpacity onPress={()=>props.delete(props.key)}>
            <Text>X</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default Task;