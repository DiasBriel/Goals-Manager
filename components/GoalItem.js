import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";

const GoalItem = (props) => {
  const [checked, setChecked] = useState(true);
  return (
    <TouchableOpacity
      // onPress={props.onDelete.bind(this, props.id)}
      activeOpacity={0.8}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
        <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: 10,
    borderColor: "#d6d6d6",
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: 10,
  },
});
export default GoalItem;
