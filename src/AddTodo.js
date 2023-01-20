import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Empty input");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Add text"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button color="black" title="Add Goal" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#eee",
  },
});
