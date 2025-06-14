import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoForm from '@/components/todoForm';
import TodoList from '@/components/todoList';

const TodoPage: React.FC = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Todos</Text>
      <TodoForm />
      <TodoList/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 48,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
  },
});

export default TodoPage;