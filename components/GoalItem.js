import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";

const GoalItem = (props) => {
  const handleChecked = (id) => {
    props.data.forEach((goal) => {
      if (goal.uid === id) {
        goal.done = !goal.done;
      }
    });
    props.getNewData(props.data);
  };

  return (
    <TouchableOpacity
      onPress={props.onDelete.bind(this, props.id)}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.listItem,
          { borderColor: props.checked ? "#7FC6A4" : "#d6d6d6" },
          ,
        ]}
      >
        <Text style={{ color: props.checked ? "#7FC6A4" : "black" }}>
          {props.title}
        </Text>
        <CheckBox
          checked={props.checked}
          checkedColor="#7FC6A4"
          onPress={() => handleChecked(props.id)}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 12,
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: 10,
  },
});
export default GoalItem;
