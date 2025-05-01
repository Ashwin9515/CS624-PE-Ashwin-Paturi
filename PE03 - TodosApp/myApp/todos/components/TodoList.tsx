import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

type TodoType = {
  title: string;
  completed: boolean;
};

type Props = {
  todos: TodoType[];
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
  type: 'All' | 'Active' | 'Completed';
};

const TodoList: React.FC<Props> = ({ todos, toggleComplete, deleteTodo, type }) => {
  const filtered = todos.filter(todo => {
    if (type === 'Active') return !todo.completed;
    if (type === 'Completed') return todo.completed;
    return true;
  });

  return (
    <View>
      {filtered.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </View>
  );
};

export default TodoList;
