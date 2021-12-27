import { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";

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
        <Text style={styles.title}>What is your new goal for today?</Text>
        <TextInput
          placeholder="Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              buttonStyle={{
                backgroundColor: "#5D737E",
                borderRadius: 30,
              }}
              title="CANCEL"
              onPress={props.onCancel}
            />
          </View>
          <View style={styles.button}>
            <Button
              buttonStyle={{
                backgroundColor: "#7FC6A4",
                borderRadius: 30,
              }}
              title="ADD"
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginBottom: 20,
    paddingHorizontal: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  inputContainer: {
    flex: 1, //will get all available space from parent component
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#D6D6D6",
    marginTop: 20,
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    marginTop: 30,
    width: "45%",
    borderRadius: 30,
  },
});
export default GoalInput;
