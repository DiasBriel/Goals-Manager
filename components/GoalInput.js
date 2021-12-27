import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (value) => {
    setEnteredGoal(value);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, //will get all available space from parent component
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "45%",
  },
});
export default GoalInput;
