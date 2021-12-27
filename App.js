import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import Data from "./dummyData";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [coursedGoals, setCoursedGoals] = useState(Data);
  const [completedGoals, setCompletedGoals] = useState(0);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle === "") {
      setIsAddMode(false);
    } else {
      setCoursedGoals((currentGoals) => [
        ...currentGoals,
        { uid: Math.random().toString(), done: false, value: goalTitle }, //react native supports key and id
      ]);
      setIsAddMode(false);
    }
  };

  const removeGoalHandler = (goalId) => {
    setCoursedGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.uid !== goalId);
    });
  };

  const cancelGoalAddHandler = () => {
    setIsAddMode(false);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Let's organize{"\n"}your goals for today</Text>
      <View style={styles.goalsTotal}>
        <View>
          <Text style={{ color: "white", fontSize: 16 }}>Total of Goals</Text>
          <Text style={styles.counter}>{coursedGoals.length}</Text>
        </View>
        <View style={styles.divider}></View>
        <View>
          <Text style={{ color: "white", fontSize: 16 }}>Total of Goals</Text>
          <Text style={styles.counter}>32</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Your Goals</Text>

        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAddHandler}
        />
      </View>
      <SafeAreaView
        style={{ marginTop: 10, height: "45%", position: "relative" }}
      >
        <FlatList
          style={styles.list}
          keyExtractor={(item, index) => item.uid} //uid was used to simulate an invalid key name
          data={coursedGoals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.uid}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
        <TouchableOpacity
          style={styles.addGoalButton}
          onPress={() => setIsAddMode(true)}
        >
          <Text>New Goal</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={{ position: "relative", left: "-50%" }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  header: {
    paddingVertical: 50,
    fontSize: 32,
    fontWeight: "bold",
  },
  goalsTotal: {
    marginVertical: 15,
    borderRadius: 30,
    paddingVertical: 45,
    paddingHorizontal: 20,
    backgroundColor: "#2B3A67",
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
  title: {
    fontWeight: "bold",
    fontSize: 28,
    width: "80%",
    marginVertical: 30,
  },
  addGoalButton: {
    position: "absolute",
    backgroundColor: "#f6f6f6",
    padding: 10,
    borderRadius: 5,
    bottom: -30,
    left: "50%",
  },
});
