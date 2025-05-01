import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import TodoList from '../../components/TodoList';
import TabBar from '../../components/TabBar';

type TodoType = {
  title: string;
  completed: boolean;
};

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [type, setType] = useState<'All' | 'Active' | 'Completed'>('All');

  const inputChange = (value: string) => setInputValue(value);

  const submitTodo = () => {
    if (inputValue.trim()) {
      const newTodo = { title: inputValue, completed: false };
      const updated = [...todos, newTodo];
      setTodos(updated);
      setInputValue('');
      console.log('Todos:', updated);
    }
  };

  const toggleComplete = (index: number) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTodo = (index: number) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always">
        <Heading />
        <Input inputValue={inputValue} inputChange={inputChange} submitTodo={submitTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          type={type}
        />
        <TabBar type={type} setType={setType} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
});
