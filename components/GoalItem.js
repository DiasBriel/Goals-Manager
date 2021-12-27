import { useState } from "react";
import { Pressable, StyleSheet, Text, View, Modal } from "react-native";
import { Button, CheckBox } from "react-native-elements";

const GoalItem = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleChecked = (id) => {
    props.data.forEach((goal) => {
      if (goal.uid === id) {
        goal.done = !goal.done;
      }
    });
    props.getNewData(props.data);
  };

  return (
    <View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.inputContainer}>
          <Text style={styles.title}>
            Are you sure you want to delete this goal?
          </Text>
          <Text style={styles.goaltitle}>{props.title}</Text>

          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                buttonStyle={{
                  backgroundColor: "#5D737E",
                  borderRadius: 30,
                }}
                title="CANCEL"
                onPress={() => setModalVisible(false)}
              />
            </View>
            <View style={styles.button}>
              <Button
                buttonStyle={{
                  backgroundColor: "#7FC6A4",
                  borderRadius: 30,
                }}
                title="DELETE"
                onPress={props.onDelete.bind(this, props.id)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 30,
          marginVertical: 10,
          borderColor: props.checked ? "#7FC6A4" : "#d6d6d6",
        }}
      >
        <Pressable
          style={styles.listItem}
          onPress={() => handleChecked(props.id)}
          onLongPress={() => setModalVisible(true)}
          delayLongPress={200}
          android_ripple={{ color: "#F6F6F6", borderless: true }}
        >
          <Text style={{ color: props.checked ? "#7FC6A4" : "black" }}>
            {props.title}
          </Text>
          <CheckBox
            checked={props.checked}
            checkedColor="#7FC6A4"
            onPress={() => handleChecked(props.id)}
          />
        </Pressable>
      </View>
    </View>
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
  goaltitle: {
    fontSize: 20,
    borderRadius: 20,
    marginVertical: 30,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 12,
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
export default GoalItem;
