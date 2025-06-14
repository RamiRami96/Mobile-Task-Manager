import { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Todo } from '@/models/todo.model';
import { useStorage } from '@/hooks/useStorage';

interface TodoCardProps {
    todo: Todo;
}

const TodoCard: FC<TodoCardProps> = ({ todo }) => {
    const { toggleTodo, removeTodo } = useStorage();

    const handleToggleTodo = () => {
        toggleTodo(todo.id);
    };

    const handleRemoveTodo = () => {
        removeTodo(todo.id);
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity
                style={styles.textContainer}
                onPress={handleToggleTodo}
            >
                <Text style={[styles.text, todo.completed && styles.completed]}>
                    {todo.title}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleRemoveTodo}
            >
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        marginBottom: 8,
        borderRadius: 6,
        elevation: 2,
    },
    textContainer: {
        flex: 1,
    },
    text: {
        fontSize: 16,
    },
    completed: {
        textDecorationLine: 'line-through',
        color: '#aaa',
    },
    deleteButton: {
        marginLeft: 12,
        padding: 6,
        backgroundColor: '#ff5252',
        borderRadius: 4,
    },
    deleteText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default TodoCard;