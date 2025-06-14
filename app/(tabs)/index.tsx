import { StyleSheet, View, Text, Animated } from 'react-native';
import { useFadeIn } from '@/hooks/useFadeIn';

const description = "Welcome to Mobile Task Manager! Organize your tasks, set reminders, and boost your productivity on the go.";

function HomeScreen() {
  const fadeAnim = useFadeIn();

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.title}>Mobile Task Manager</Text>
        <Text style={styles.description}>{description}</Text>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2d3748',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#4a5568',
    textAlign: 'center',
  },
});
export default HomeScreen;


