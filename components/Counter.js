import { StyleSheet, Text, View } from "react-native";

const Counter = (props) => {
  return (
    <View style={styles.goalsTotal}>
      <View>
        <Text style={{ color: "white", fontSize: 16 }}>Total of Goals</Text>
        <Text style={styles.counter}>{props.coursedGoals.length}</Text>
      </View>
      <View style={styles.divider}></View>
      <View>
        <Text style={{ color: "white", fontSize: 16 }}>Accomplished Goals</Text>
        <Text style={styles.counter}>{props.completedGoals}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goalsTotal: {
    marginVertical: 15,
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#7FC6A4",
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "#444",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  divider: {
    height: "100%",
    width: 1,
    backgroundColor: "white",
  },
  counter: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
});

export default Counter;
