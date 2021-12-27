import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Counter from "./components/Counter";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import Data from "./dummyData";

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

  const handleCheckedGoals = (updatedGoals) => {
    let counter = 0;
    updatedGoals.forEach((goal) => {
      if (goal.done === true) {
        counter++;
      }
    });
    setCompletedGoals(counter);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Let's organize{"\n"}your goals for today</Text>
      <Counter coursedGoals={coursedGoals} completedGoals={completedGoals} />
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
      <SafeAreaView style={{ marginTop: 10, height: "45%" }}>
        <FlatList
          style={styles.list}
          keyExtractor={(item, index) => item.uid} //uid was used to simulate an invalid key name
          data={coursedGoals}
          renderItem={(itemData) => (
            <GoalItem
              checked={itemData.item.done}
              id={itemData.item.uid}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
              data={coursedGoals}
              getNewData={handleCheckedGoals}
            />
          )}
        />
      </SafeAreaView>
      <View style={{ position: "relative" }}>
        <TouchableOpacity
          style={styles.addGoalButton}
          onPress={() => setIsAddMode(true)}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            New Goal
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  header: {
    paddingVertical: 50,
    fontSize: 32,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    width: "80%",
    marginVertical: 30,
  },
  addGoalButton: {
    position: "absolute",
    backgroundColor: "#5D737E",
    width: "70%",
    paddingVertical: 20,
    paddingHorizontal: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    bottom: -70,
    left: "15%",
    shadowColor: "#444",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
});
