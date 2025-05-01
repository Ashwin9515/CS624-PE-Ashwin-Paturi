import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoButton from './TodoButton';

type Props = {
  todo: { title: string; completed: boolean };
  index: number;
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
};

const Todo: React.FC<Props> = ({ todo, index, toggleComplete, deleteTodo }) => (
  <View style={styles.todoContainer}>
    <Text style={[styles.todoText, todo.completed && styles.completed]}>
      {todo.title}
    </Text>
    <View style={styles.buttons}>
      <TodoButton
        text="Done"
        color="green"
        onPress={() => toggleComplete(index)}
      />
      <TodoButton
        text="Delete"
        color="red"
        onPress={() => deleteTodo(index)}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 20,
    borderRadius: 6,
    elevation: 2,
  },
  todoText: { fontSize: 16 },
  completed: { textDecorationLine: 'line-through', color: 'green' },
  buttons: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 6 },
});

export default Todo;