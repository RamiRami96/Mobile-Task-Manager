import { Todo } from '@/models/todo.model';
import { FC } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import TodoCard from './todoCard';
import { useStorage } from '@/hooks/useStorage';


const TodoList: FC = () => {
    const { getTodos } = useStorage()
  
    const renderTodo = ({ item }: { item: Todo }) => (
        <TodoCard todo={item} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={getTodos()}
                renderItem={renderTodo}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default TodoList;