import React from "react";
import { Button,  StyleSheet, Text, View } from "react-native";

const GoalItem = ({ itemData, handleDeleteGoal, handleComplete }) => {
  const { goal, id, completed } = itemData?.item;

  return (
    <View style={styles.goalStyle}>
         <Text style={completed ? styles.completeGoalText : styles.goalText}>{goal}</Text>
         <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button color={"#cc0066"} title="Delete"  onPress={() => handleDeleteGoal(id)}/>
          </View>
          {
            !completed && <View style={styles.buttonStyle}>
            <Button title="Complete"  onPress={() => handleComplete(id)}/>
          </View>
          }
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goalStyle: {
    color: "white",
    backgroundColor: "#19abff",
    margin: 10,
    borderCurve: "circular",
    borderRadius: 5,
    padding: 10,
  },
  goalText: {
    color: "white",
    fontSize: 18,
    
  },
  completeGoalText: {
    color: "white",
    fontSize: 18,
    textDecorationLine:"line-through"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  buttonStyle:{
    width: '42%',
    marginHorizontal: 10,
  },
});

export default GoalItem;
