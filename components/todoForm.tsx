import { FC } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Controller } from 'react-hook-form';
import useTodoForm from '@/hooks/useTodoForm';

const TodoForm: FC = () => {
  const { control, handleSubmit, errors } = useTodoForm();

  return (
    <View style={styles.container}>
<Controller
  control={control}
  name="title"
  defaultValue=""
  render={({ field: { onChange, onBlur, value } }) => (
    <TextInput
      placeholder="Add a new todo"
      style={styles.input}
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
    />
  )}
/>
      {errors.title && (
        <Text style={styles.error}>{errors.title.message}</Text>
      )}
<TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 24,
    borderRadius: 4,
    marginBottom: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
    button: {
    backgroundColor: '#000',
    height: 56,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TodoForm;