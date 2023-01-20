import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Keyboard,
  ImageBackground,
} from "react-native";
import { AddTodo } from "./src/AddTodo";
import { Navbar } from "./src/Navbar";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const screenHeight = Dimensions.get("window").height;

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };

    setTodos((prev) => [...prev, newTodo]);
    Keyboard.dismiss();
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <Navbar title="Todo List" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View style={{ height: screenHeight }}>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={todos}
            renderItem={({ item }) => (
              <Todo todo={item} onRemove={removeTodo} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
  },
});
